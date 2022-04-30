/* eslint-disable prettier/prettier */
import { Column, PrimaryColumn } from 'typeorm';
export class InstructorEntity {
    @PrimaryColumn()
    Instructor_ID: string;

    @Column()
    Password: string;

    @Column()
    Name: string;

    @Column()
    Surname: string;
}
