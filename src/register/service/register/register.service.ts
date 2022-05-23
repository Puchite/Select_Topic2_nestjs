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
    await this.RegisterRepository.query(`INSERT INTO Register VALUES 
                                    (
                                      "${Register.Student_ID}", 
                                      "${Register.Course_ID}", 
                                      ${Register.Section}, 
                                      "${Register.Year}",
                                      ${Register.Semester},
                                      ${Register.Grade}
                                    )`)
                                    
    return this.RegisterRepository.query(`SELECT * FROM Register`);
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
  // Get Register Result
  RegisterResult(Student_ID: string, Year: string, Semester: number) {
    return this.RegisterRepository.query(`SELECT DISTINCT Register.Course_ID, Course.Course_Name, Register.Section FROM Register 
                                    JOIN Course
                                    WHERE Register.Student_ID == "${Student_ID}"
                                    AND Register.Year == "${Year}"
                                    AND Register.Semester == ${Semester}
                                    AND Course.Course_ID == Register.Course_ID`);
  }

  // Get Grade and Register Result with Specific Years and Semester
  GradeSummarySpecific(Student_ID: string, Year: string, Semester: number) {
    return this.RegisterRepository.query(`SELECT DISTINCT Register.Course_ID, Course.Course_Name, Register.Section, Register.Grade FROM Register 
                                    JOIN Course
                                    WHERE Register.Student_ID == "${Student_ID}"
                                    AND Register.Year == "${Year}"
                                    AND Register.Semester == ${Semester}
                                    AND Course.Course_ID == Register.Course_ID`);
  }

  // Get Grade and Register Result 
  GradeSummary(Student_ID: string) {
    return this.RegisterRepository.query(`SELECT DISTINCT Register.Course_ID, Course.Course_Name, Register.Section, Register.Grade FROM Register 
                                    JOIN Course
                                    WHERE Register.Student_ID == "${Student_ID}"
                                    AND Course.Course_ID == Register.Course_ID`);
  }

  GetDataBySpecificSection(Year, Course_ID, Section) {
    return this.RegisterRepository.query(`SELECT DISTINCT Course.Course_Name, Course.Section, UserData.Student_ID, UserData.Name, UserData.Surname FROM Course 
                                          JOIN UserData, Register
                                          WHERE Register.Course_ID == "${Course_ID}"
                                          AND Register.Year == "${Year}"
                                          AND Register.Student_ID == UserData.Student_ID
                                          AND Register.Section == Course.Section
                                          AND Course.Section == ${Section}
                                          AND Course.Course_ID == Register.Course_ID`);
  }

  DropCourse(Student_ID, Year, Course_ID) {
    return this.RegisterRepository.query(`DELETE FROM Register
                                          WHERE Register.Student_ID == "${Student_ID}"
                                          AND Register.Year == "${Year}"
                                          AND Register.Course_ID == "${Course_ID}"`);
  }

  HaveRegister(Student_ID) {
    return this.RegisterRepository.query(`SELECT Register.Course_ID, Register.Grade FROM Register 
                                          WHERE Register.Student_ID == "${Student_ID}"
                                          AND Register.Grade > -1`);
  }
}
