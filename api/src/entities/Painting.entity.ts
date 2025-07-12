import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Painting {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255, nullable: true })
  image!: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  author!: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  title!: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  param!: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  prise!: string | null;

  @Column({ type: "varchar", length: 255, nullable: true })
  type!: string | null;
}
