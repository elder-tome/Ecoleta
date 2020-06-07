import {MigrationInterface, QueryRunner} from "typeorm";

export class createPoint1591380802127 implements MigrationInterface {
    name = 'createPoint1591380802127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "point" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "image" varchar NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "whatsapp" varchar NOT NULL, "latitude" decimal NOT NULL, "longitude" decimal NOT NULL, "city" varchar NOT NULL, "uf" varchar(2) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "point"`);
    }

}
