/* eslint-disable prettier/prettier */
import { InstructorEntity } from './instructor/entity/instructor.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseEntity } from './course/entity/course.entity';
import { CourseModule } from './course/course.module';
import { Module } from '@nestjs/common';
import { RegisterEntity } from './register/entity/register.entity';
import { RegisterModule } from './register/register.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserdataModule } from './userdata/userdata.module';
import { UserdataEntity } from './userdata/entity/userdata.entity';
import { InstructorModule } from './instructor/instructor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/CS_Student.db',
      entities: [UserdataEntity, CourseEntity, RegisterEntity, InstructorEntity],
      synchronize: true,
    }),
    UserdataModule,
    CourseModule,
    RegisterModule,
    InstructorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
