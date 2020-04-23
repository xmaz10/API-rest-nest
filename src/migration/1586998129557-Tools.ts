import {MigrationInterface, QueryRunner} from "typeorm";

export class Tools1586998129557 implements MigrationInterface {
    name = 'Tools1586998129557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tools" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "link" character varying NOT NULL, "description" character varying NOT NULL, "tags" character varying array NOT NULL, CONSTRAINT "PK_e23d56734caad471277bad8bf85" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tools"`, undefined);
    }

}
