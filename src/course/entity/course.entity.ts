import { Column, PrimaryColumn } from 'typeorm';

export class CourseEntity {
  @PrimaryColumn()
  Course_ID: string;

  @Column({ nullable: false })
  Course_Name: string;

  @Column({ nullable: false })
  Course_Credit: number;
}
