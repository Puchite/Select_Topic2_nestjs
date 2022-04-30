/* eslint-disable prettier/prettier */
import { Column } from 'typeorm';
import { PrimaryColumn } from "typeorm";

export class HistoryEntity {
    @PrimaryColumn()
    History_ID: number;
    
    @Column()
    Grade: number;
}
