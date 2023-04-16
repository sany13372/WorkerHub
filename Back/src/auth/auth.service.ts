import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../user/entities/user.entity";
import {Repository} from "typeorm";
import {JwtService} from "@nestjs/jwt";
import {hash, compare, genSalt} from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(
      @InjectRepository(User) private readonly UserRepository:Repository<User>,
      private readonly jwtServise:JwtService
  ) {
  }
  async login ({email, password}:UpdateAuthDto) {
    const user = await this.validateUser(email, password)
    const tokens = await this.tokenpair(String(user.id))
    return {
      user:user,
      ...tokens
    }
  }
  async register({email, password}:CreateAuthDto){

    const oldUser = await this.UserRepository.findOne({where:{email}})
    if (oldUser) {
      throw new BadRequestException('Такой пользователь уже есть')
    }

    const salt = await genSalt(10);

    const newUser = await this.UserRepository.save({
      email:email,

      password: await hash(password, salt)
    })

    const tokens = await this.tokenpair(String(newUser.id))
    return {
      user:newUser,
      ...tokens
    }
  }

  async findByEmail(email: string) {
    return this.UserRepository.findOne({where:{ email} })
  }

  async getNewTokens (ref:any) {
    if(!ref.refreshToken) throw new UnauthorizedException('Пожалуйста войдите в систему')
    const result = await this.jwtServise.verifyAsync(ref.refreshToken)

    if(!result) throw new UnauthorizedException('Не валидный токен')

   const user = await this.UserRepository.findOne({where:{id:result.id}});

    const tokens = await this.tokenpair(String(user.id))

    return {
      user:user,
      ...tokens
    }
  }

  async validateUser (email: string, password: string) {
    const user = await this.findByEmail(email);
    if(!user) throw new UnauthorizedException('Такого пользователя нету ');

    const isValidpassword = await compare(password,user.password)
    if(!isValidpassword) throw new UnauthorizedException('Неверный пароль');

    return user;
  }

  async tokenpair (userID:string){
    const data = {id: userID}

    const refreshToken = await this.jwtServise.signAsync(data,{
      expiresIn:'15d'
    })

    const accessToken = await this.jwtServise.signAsync(data,{
      expiresIn:'1d'
    })

    return {refreshToken,accessToken}
  }

  returnUserField(user:any){
    return {
      email:user.email,
      id:user.id,
      password:user.password
      //...user
    }
  }
}
