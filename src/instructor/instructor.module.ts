import { InstructorEntity } from './entity/instructor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { InstructorController } from './controller/instructor/instructor.controller';
import { InstructorService } from './service/instructor/instructor.service';

@Module({
  imports: [TypeOrmModule.forFeature([InstructorEntity])],
  controllers: [InstructorController],
  providers: [InstructorService],
})
export class InstructorModule {}
