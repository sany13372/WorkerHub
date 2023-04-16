import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export class Base {
    @PrimaryGeneratedColumn()
    id:string
    @CreateDateColumn()
    createdAt:string
    @UpdateDateColumn()
    updatedAt:string
}