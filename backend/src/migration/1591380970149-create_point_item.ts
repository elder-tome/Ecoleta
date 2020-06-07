import {MigrationInterface, QueryRunner} from "typeorm";

export class createPointItem1591380970149 implements MigrationInterface {
    name = 'createPointItem1591380970149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "point_item" ("pointId" integer NOT NULL, "itemId" integer NOT NULL, CONSTRAINT "FK_b4c4fd729c1bcac9573ee1d6c10" FOREIGN KEY ("pointId") REFERENCES "point" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_7cb3b29a4becb245b2e67e3cd13" FOREIGN KEY ("itemId") REFERENCES "item" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("pointId", "itemId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b4c4fd729c1bcac9573ee1d6c1" ON "point_item" ("pointId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7cb3b29a4becb245b2e67e3cd1" ON "point_item" ("itemId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_7cb3b29a4becb245b2e67e3cd1"`);
        await queryRunner.query(`DROP INDEX "IDX_b4c4fd729c1bcac9573ee1d6c1"`);
        await queryRunner.query(`DROP TABLE "point_item"`);
    }

}
