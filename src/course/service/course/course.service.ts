import { CourseDto } from './../../dto/course.dto/course-dto';
import { CourseEntity } from './../../entity/course.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CourseService {
  public Course: CourseDto[] = [];
  constructor(
    @InjectRepository(CourseEntity)
    private CourseRepository: Repository<CourseEntity>,
  ) {}
  loadAllS(): Promise<CourseDto[]> {
    return this.CourseRepository.query('select * from Course');
  }
}
