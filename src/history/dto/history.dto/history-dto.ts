/* eslint-disable prettier/prettier */
import { IsNumber,IsString } from "class-validator";

export class HistoryDto {
    @IsString()
    History_ID: string;
    
    @IsNumber()
    Grade: number;

    @IsString()
    Student_ID: string;

    @IsString()
    Course_ID: string;
}
