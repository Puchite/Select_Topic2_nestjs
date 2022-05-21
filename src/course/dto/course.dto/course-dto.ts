import { IsNumber, IsString } from 'class-validator';

export class CourseDto {
  @IsString()
  Course_ID: string;

  @IsString()
  Course_Name: string;

  @IsNumber()
  Semester: number;

  @IsNumber()
  Years: number;

  @IsString()
  Instructor_ID: string;

  @IsString()
  Previous_Subject: string;

  @IsNumber()
  Section: number;
}
