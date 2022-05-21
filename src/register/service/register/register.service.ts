/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from 'src/register/dto/register.dto/register-dto';
import { RegisterEntity } from 'src/register/entity/register.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {
  public Register: RegisterDto[] = [];

  constructor(
    @InjectRepository(RegisterEntity)
    private RegisterRepository: Repository<RegisterEntity>,
  ) {}

  Load_Register(): Promise<RegisterDto[]> {
    return this.RegisterRepository.query('select * from Register');
  }

  Load_Register_Course_ID(Course_ID: string): Promise<RegisterDto[]> {
    return this.RegisterRepository.query(
      'SELECT * FROM Register WHERE COURSE_ID="' + Course_ID + '"',
    );
  }

  async InsertData(Register: RegisterDto): Promise<RegisterDto[]> {
    console.log(Register.Course_ID.length);
    for(let i = 0; i < Register.Course_ID.length; i++)
    {
      await this.RegisterRepository.query(`INSERT INTO Register VALUES 
                                    (
                                      "${Register.Student_ID}", 
                                      "${Register.Course_ID[i]}", 
                                      ${Register.Section[i]}, 
                                      "${Register.Year}",
                                      ${Register.Grade}
                                    )`)
    }
    return
  }

  async CheckRegister(Student_ID, Course_ID) {
    // Check Computer Programming 2 Requirement
    if(Course_ID == "040613121")
    {
        const Check = await this.RegisterRepository.query(`SELECT Register.Course_ID, Register.Grade FROM Register
                                            WHERE Register.Course_ID == "040613102"
                                            AND Register.Grade >= 1
                                            AND Register.Student_ID == "${Student_ID}"`);
        if(Object.values(Check).length > 0)
        {
            return true;
        }
        else 
        {
            return `${Student_ID} still not pass Computer Programming 1`;
        }
    }
    // Check DESIGN AND ANALYSIS OF ALGOR Requirement
    else if(Course_ID == "040613292")
    {
        const Check = await this.RegisterRepository.query(`SELECT Register.Course_ID, Register.Grade FROM Register
                                            WHERE Register.Course_ID == "040613202"
                                            AND Register.Grade >= 1
                                            AND Register.Student_ID == "${Student_ID}"`);
        if(Object.values(Check).length > 0)
        {
            return true;
        }
        else 
        {
            return `${Student_ID} still not pass Computer Programming 2`;
        }
    }
    // Check Data Structure And Algorithm Requirement
    else if(Course_ID == "040613202")
    {
        const Check = await this.RegisterRepository.query(`SELECT Register.Course_ID, Register.Grade FROM Register
                                            WHERE Register.Course_ID == "040613121"
                                            AND Register.Grade >= 1
                                            AND Register.Student_ID == "${Student_ID}"`);
        if(Object.values(Check).length > 0)
        {
            return true;
        }
        else 
        {
            return `${Student_ID} still not pass Computer Programming 2`;
        }
    }
    // Check OOP Requirement
    else if(Course_ID == "040613222")
    {
        const Check = await this.RegisterRepository.query(`SELECT Register.Course_ID, Register.Grade FROM Register
                                            WHERE Register.Course_ID == "040613121"
                                            AND Register.Grade >= 1
                                            AND Register.Student_ID == "${Student_ID}";`);
        if(Object.values(Check).length > 0)
        {
            return true;
        }
        else            
        {
            return `${Student_ID} still not pass Computer Programming 2`;
        }
    }
    // Other Subject
    else
    {
        return true;
    }
  }
}
