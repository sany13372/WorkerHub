import {Column, Entity, ManyToOne, OneToMany} from "typeorm";
import {Base} from "../../utils/base/base";
import {Dialog} from "../../dialog/entities/dialog.entity";

@Entity('User')
export class User extends Base {

    @Column({unique: false,nullable:true})
    email: string
    @Column({unique: false,nullable:true})
    password: string
    @Column({unique: false,nullable:true})
    firstname?: string
    @Column({unique: false,nullable:true})
    lastname?: string
    @Column({unique: false,nullable:true})
    phone?: number
    @Column({unique: false,nullable:true})
    avatar:string
    @Column("text", {unique: false,array: true, default: {},nullable:true})
    skills?: String[];
    @OneToMany(() => Dialog,dialog => dialog.user)
    dialogs:Dialog[]
}
