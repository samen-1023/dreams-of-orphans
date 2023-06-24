import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uid: string

  @Column('boolean', { default: true, nullable: false })
  isDeleted: boolean
}
