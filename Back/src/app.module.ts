import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ChatModule} from './chat/chat.module';
import {DialogModule} from './dialog/dialog.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Dialog} from "./dialog/entities/dialog.entity";
import { UserModule } from './user/user.module';
import {User} from "./user/entities/user.entity";
import { AuthModule } from './auth/auth.module';
import {MessageEntity} from "./dialog/entities/message.entity";

const defaultOptions = {
    type: 'postgres',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'db',
    synchronize: true,
};

@Module({
    imports: [
        ChatModule,
        DialogModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            port: 5432,
            // username: 'user',
            // password: 'password',
            database: 'template1',
            synchronize: true,
            host:'localhost',
            entities:[Dialog,User,MessageEntity]
        }),
        UserModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
