/* eslint-disable prettier/prettier */
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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/CS_Student.db',
      entities: [UserdataEntity, CourseEntity, RegisterEntity],
      synchronize: true,
    }),
    UserdataModule,
    CourseModule,
    RegisterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
