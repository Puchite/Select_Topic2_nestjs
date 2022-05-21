/* eslint-disable prettier/prettier */
import { Column, PrimaryColumn } from 'typeorm';

export class CourseEntity {
  @PrimaryColumn()
  Course_ID: string;

  @Column({ nullable: false })
  Course_Name: string;

  @Column({ nullable: false })
  Semester: number;

  @Column({ nullable: false })
  Years: number;

  @Column({ nullable: false })
  Instructor_ID: string;

  @Column({ nullable: false })
  Previous_Subject: string;

  @Column({ nullable: false })
  Section: number;
}
