import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    email:string
    password:string
    firstname: string
    lastname: string
    phone: number
    avatar:string
    skills: String[];
}
