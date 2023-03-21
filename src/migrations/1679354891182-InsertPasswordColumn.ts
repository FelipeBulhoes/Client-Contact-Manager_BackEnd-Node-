import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertPasswordColumn1679354891182 implements MigrationInterface {
    name = 'InsertPasswordColumn1679354891182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "password"`);
    }

}
