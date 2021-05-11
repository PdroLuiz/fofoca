import {Entity, ObjectIdColumn, CreateDateColumn, Column, getMongoRepository} from "typeorm";

export interface IFofocaConstructor {
    text? : string;
    userIp?: string;
}

@Entity({name: "fofocas"})
export class Fofoca {

    constructor({text, userIp} : IFofocaConstructor = {}) {
        this.text = text;
        this.userIp = userIp;
    }  

    static getRepository() {
        return getMongoRepository(Fofoca);
    }

    @ObjectIdColumn()
    id: string;

    @Column({nullable: false})
    text: string;

    @Column({select: false})
    userIp: string;

    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;

}

