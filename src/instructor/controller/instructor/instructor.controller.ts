/* eslint-disable prettier/prettier */
import { InstructorService } from './../../service/instructor/instructor.service';
import { Controller, Get, Param } from '@nestjs/common';
import { InstructorDto } from 'src/instructor/dto/instructor.dto/instructor-dto';

@Controller('instructor')
export class InstructorController {
    constructor(private InstructorService: InstructorService) {}
    
    @Get()
    Load_Instructor(): Promise<InstructorDto[]> {
        return this.InstructorService.Load_Instructor();
    }

    @Get(':Instructor_ID')
    Load_Instructor_Subject(@Param('Instructor_ID') Instructor_ID: string): Promise<InstructorDto[]> {
        return this.InstructorService.Load_Instructor_Subject(Instructor_ID);
    }

    @Get(':Instructor_ID/:Password')
    Load_Instructor_Account(@Param('Instructor_ID') Instructor_ID: string, @Param('Password') Password: string): Promise<InstructorDto[]> {
        return this.InstructorService.Load_Instructor_Account(Instructor_ID, Password);
    }

    @Get('/Specific/:Instructor_ID/:Course_ID')
    Load_Instructor_Specific_Course(@Param('Instructor_ID') Instructor_ID: string, @Param('Course_ID') Course_ID: string): Promise<InstructorDto[]> {
        return this.InstructorService.Load_Instructor_Specific_Course(Instructor_ID, Course_ID);
    }

    @Get('/AllSubject/:Instructor_ID/:Password')
    Load_Instructor_All_Course(@Param('Instructor_ID') Instructor_ID: string, @Param('Password') Password: string): Promise<InstructorDto[]> {
        return this.InstructorService.Load_Instructor_All_Course(Instructor_ID, Password);
    }
}
