import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {hash, compare, genSalt} from 'bcryptjs'

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
    }

    findAll() {
        return this.userRepository.find();
    }

    findOne(id: string) {
        return this.userRepository.findOne({where:{id:id}});
    }

    async update(id: string, updateUserDto: UpdateUserDto) {

        const user = await this.userRepository.findOne({where:{email:updateUserDto.email,id:id}})

        //if(user && String(id) !== String(user.id)) throw new NotFoundException('Емэил занят');

        if(updateUserDto.password){
            const salt = await genSalt(10);
            user.password = await hash(updateUserDto.password,salt)
        }

        user.email = updateUserDto.email
        user.skills = updateUserDto.skills
        user.phone = updateUserDto.phone
        user.firstname = updateUserDto.firstname
        user.lastname = updateUserDto.lastname
        user.avatar = updateUserDto.avatar

        const saveUser = await this.userRepository.save(user)

        return saveUser
    }

    remove(id: string) {
        const user = this.userRepository.findOneById(id)
        return this.userRepository.delete(id)
    }
}
