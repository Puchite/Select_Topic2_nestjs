/* eslint-disable prettier/prettier */
import { InstructorEntity } from './../../entity/instructor.entity';
import { InstructorDto } from './../../dto/instructor.dto/instructor-dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InstructorService {
    public Instructor: InstructorDto[] = [];

    constructor(
        @InjectRepository(InstructorEntity)
        private InstructorRepository: Repository<InstructorEntity>
    ) {}

    Load_Instructor() : Promise<InstructorDto[]> {
        return this.InstructorRepository.query('SELECT * FROM Instructor');
    }

    Load_Instructor_Subject(Instructor_ID: string): Promise<InstructorDto[]> {
        return this.InstructorRepository.query(
            'SELECT Course.* , Instructor.Name FROM Instructor JOIN Course WHERE Course.Instructor_ID = Instructor.Instructor_ID AND Instructor.Instructor_ID = "'+Instructor_ID+'"')
    }

    async Load_Instructor_Account(Instructor_ID: string, Password: string): Promise<any> {
        console.log(Instructor_ID, Password);
        const user = await this.InstructorRepository.query(
            'SELECT * FROM Instructor WHERE Instructor.Instructor_ID="'+Instructor_ID+'" AND Instructor.Password="'+Password+'"')
        
        if(Object.keys(user).length != 0)
        {
            return user;
        }

        return false;
    }

}
