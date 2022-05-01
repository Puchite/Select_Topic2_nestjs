/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { PrimaryColumn } from "typeorm";

export class HistoryEntity {
    @PrimaryColumn()
    History_ID: string;
    
    @Column()
    Grade: number;

    @Column()
    Student_ID: string;

    @Column()
    Course_ID: string;
}
