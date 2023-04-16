import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UsePipes, ValidationPipe} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor (private readonly authService:AuthService) {}
  @HttpCode(200)
  @Post('register')
  async register (@Body() dto:CreateAuthDto) {
    return this.authService.register(dto)
  }

  @HttpCode(200)
  @Post('login/access-token')
  async getNewTokens (@Body() dto:string) {
    return this.authService.getNewTokens(dto)
  }

  @HttpCode(200)
  @Post('login')
  async login (@Body() dto:UpdateAuthDto) {
    return this.authService.login(dto)
  }
}
