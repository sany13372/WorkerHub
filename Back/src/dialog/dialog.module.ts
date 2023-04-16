import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { DialogService } from './dialog.service';
import { DialogController } from './dialog.controller';
import {Dialog} from "./entities/dialog.entity";
import {User} from "../user/entities/user.entity";
import {UserService} from "../user/user.service";
import {MessageEntity} from "./entities/message.entity";

@Module({
  controllers: [DialogController],
  providers: [DialogService,UserService],
  imports:[TypeOrmModule.forFeature([Dialog,User,MessageEntity])]
})
export class DialogModule {}
