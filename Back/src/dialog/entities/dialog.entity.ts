import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne} from "typeorm";
import {Base} from "../../utils/base/base";
import {User} from "../../user/entities/user.entity";
import {MessageEntity} from "./message.entity";

@Entity('Dialog')
export class Dialog extends Base {

    @ManyToOne(() => User, user => user.dialogs)
    user: User;
    @Column({unique: false, nullable: true})
    isRead: boolean
    @OneToMany(() => MessageEntity, message => message.dialogs)
    messages: MessageEntity[];
}
