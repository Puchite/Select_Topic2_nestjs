import { CourseService } from './../../service/course/course.service';
import { CourseDto } from './../../dto/course.dto/course-dto';
import { Controller } from '@nestjs/common';
import {
  Body,
  // Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserdataService } from 'src/userdata/service/userdata/userdata.service';
@Controller('course')
export class CourseController {
  constructor(private CourseService: CourseService) {}
  @Get()
  loadAll(): Promise<CourseDto[]> {
    return this.CourseService.loadAllS();
  }
}
