import { PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, Entity } from "typeorm";
import { Client } from "./clientEntity";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 120})
    full_name: string

    @Column({length: 150, unique: true})
    email: string

    @Column({unique: true})
    phone: number

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => Client, {onDelete: "CASCADE"})
    client: Client
}