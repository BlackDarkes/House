import { MigrationInterface, QueryRunner } from "typeorm";

export class PaintingsMigration1752264275186 implements MigrationInterface {
    name = 'PaintingsMigration1752264275186'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`painting\` (\`id\` int NOT NULL AUTO_INCREMENT, \`image\` varchar(255) NULL, \`author\` varchar(255) NULL, \`title\` varchar(255) NULL, \`param\` varchar(255) NULL, \`prise\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`painting\``);
    }

}
