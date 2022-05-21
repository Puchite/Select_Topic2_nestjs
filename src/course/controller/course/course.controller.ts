/* eslint-disable prettier/prettier */
import { CourseService } from './../../service/course/course.service';
import { CourseDto } from './../../dto/course.dto/course-dto';
import { Controller } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('course')
export class CourseController {
  constructor(private CourseService: CourseService) {}

  @Get()
  Load_Course(): Promise<CourseDto[]> {
    return this.CourseService.Load_Course();
  }

  @Get(':Course_ID')
  Load_Course_ID(@Param('Course_ID') Course_ID: string): Promise<CourseDto[]> {
    return this.CourseService.Load_Course_ID(Course_ID);
  }

  @Get(':Student_ID/:Semester')
  Load_Course_Semester(@Param('Student_ID') Student_ID: string,@Param('Semester') Semester: number): Promise<CourseDto[]> {
    return this.CourseService.Load_Course_Semester(Student_ID, Semester);
  }

}
