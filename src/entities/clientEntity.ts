import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeUpdate, BeforeInsert} from "typeorm"
import { hashSync } from "bcryptjs"

@Entity()
export class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 120})
    full_name: string

    @Column({length: 150, unique: true})
    email: string

    @Column()
    password: string

    @Column({unique: true})
    phone: number

    @CreateDateColumn()
    createdAt: Date

    @BeforeUpdate()
    @BeforeInsert()
    hashClientPassword(){
        this.password = hashSync(this.password, 10)
    }
}
