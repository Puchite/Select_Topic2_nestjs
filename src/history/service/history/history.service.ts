/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryDto } from 'src/history/dto/history.dto/history-dto';
import { HistoryEntity } from 'src/history/entity/history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoryService {
    public History: HistoryDto[] = [];

    constructor(
        @InjectRepository(HistoryEntity)
        private HistoryRepository: Repository<HistoryEntity>
    ) {}

    Load_History() : Promise<HistoryDto[]> {
        return this.HistoryRepository.query('SELECT * FROM History');
    }

    // Load_AllData(Course_ID, Instructor_ID, History_ID) : Promise<HistoryDto[]> {
    //     return this.HistoryRepository.query(`
    //         SELECT Register.Course_ID, History.*, Instructor.Name FROM History
    //         JOIN Register, Course, Instructor
    //         WHERE Course.Course_ID = Register.Course_ID AND 
    //         Instructor.Instructor_ID = Course.Instructor_ID AND 
    //         History.History_ID = Register.Register_ID`)
    // }

    Load_AllData() : Promise<HistoryDto[]> {
        return this.HistoryRepository.query(`
            SELECT Register.Course_ID, History.*, Register.Student_ID, Instructor.Name FROM History
            JOIN Register, Course, Instructor
            WHERE Course.Course_ID = Register.Course_ID AND 
            Instructor.Instructor_ID = Course.Instructor_ID AND 
            History.History_ID = Register.Register_ID`)
    }
}
