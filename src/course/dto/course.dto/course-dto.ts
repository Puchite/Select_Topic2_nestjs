import { IsNumber, IsString } from 'class-validator';

export class CourseDto {
  @IsString()
  Course_ID: string;

  @IsString()
  Course_Name: string;

  @IsNumber()
  Course_Credit: number;

  @IsNumber()
  Semester: number;

  @IsString()
  Instructor_ID: string;
}
