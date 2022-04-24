import { CourseEntity } from './entity/course.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './controller/course/course.controller';
import { CourseService } from './service/course/course.service';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
