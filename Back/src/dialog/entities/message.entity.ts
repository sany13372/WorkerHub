import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne} from "typeorm";
import {Base} from "../../utils/base/base";
import {User} from "../../user/entities/user.entity";
import {Dialog} from "./dialog.entity";

@Entity('Message')
export class MessageEntity extends Base {

    @Column({unique: false, nullable: true})
    message: string
    @Column({unique: false, nullable: true})
    userId: string
    @ManyToOne(() => Dialog,dialog => dialog.messages,{onDelete:'CASCADE'})
    dialogs:Dialog[]
    @Column({unique: false,nullable:true})
    isRead: boolean
}
