/* eslint-disable prettier/prettier */
import { Column, PrimaryColumn } from 'typeorm';

export class CourseEntity {
  @PrimaryColumn()
  Course_ID: string;

  @Column({ nullable: false })
  Course_Name: string;

  @Column({ nullable: false })
  Course_Credit: number;

  @Column({ nullable: false })
  Semester: number;

  @Column({ nullable: false })
  Instructor_ID: string;
}
