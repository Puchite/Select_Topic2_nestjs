/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class InstructorDto {
    @IsString()
    Instructor_ID: string;

    @IsString()
    Password: string;

    @IsString()
    Name: string;

    @IsString()
    Surname: string;
}
