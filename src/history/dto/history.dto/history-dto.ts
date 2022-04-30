/* eslint-disable prettier/prettier */
import { IsNumber } from "class-validator";

export class HistoryDto {
    @IsNumber()
    History_ID: number;
    
    @IsNumber()
    Grade: number;
}
