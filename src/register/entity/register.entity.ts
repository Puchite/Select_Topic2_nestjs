/* eslint-disable prettier/prettier */
import { PrimaryColumn, Column } from 'typeorm';

export class RegisterEntity {
  @PrimaryColumn()
  Student_ID: string;

  @PrimaryColumn()
  Course_ID: string;

  @Column()
  Section: number;

  @PrimaryColumn()
  Year: string;

  @Column()
  Grade: number;
}
