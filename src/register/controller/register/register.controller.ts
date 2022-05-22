/* eslint-disable prettier/prettier */
import { Controller, Patch } from '@nestjs/common';
import { RegisterDto } from 'src/register/dto/register.dto/register-dto';
import { RegisterService } from 'src/register/service/register/register.service';
import {
  Body,
  // Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Get()
  Load_Register(): Promise<RegisterDto[]> {
    return this.registerService.Load_Register();
  }

  @Get(':Course_ID')
  Load_Register_Course_ID(@Param('Course_ID') Course_ID: string): Promise<RegisterDto[]> {
    return this.registerService.Load_Register_Course_ID(Course_ID);
  }

  @Get(':Student_ID/:Course_ID')
  CheckRegister(@Param('Student_ID') Student_ID: string, 
              @Param('Course_ID') Course_ID: string) {
      return this.registerService.CheckRegister(Student_ID, Course_ID);
  }

  @Post()
  InsertData(@Body() Register: RegisterDto) : Promise<RegisterDto[]>{
    console.log(Register);
    return this.registerService.InsertData(Register);
  }

  @Get('/GradeSummary/All/:Student_ID')
  GradeSummary(@Param('Student_ID') Student_ID: string) {
      console.log(Student_ID);
      return this.registerService.GradeSummary(Student_ID);
  }

  @Get('/RegisterResult/:Student_ID/:Years/:Semester')
  RegisterResult(@Param('Student_ID') Student_ID: string, 
         @Param('Years') Years: string,
         @Param('Semester') Semester: number) {
      return this.registerService.RegisterResult(Student_ID, Years, Semester);
  }

  @Get('/GradeSummary/Specific/:Student_ID/:Years/:Semester')
  GradeSummarySpecific(@Param('Student_ID') Student_ID: string, 
         @Param('Years') Years: string,
         @Param('Semester') Semester: number) {
      return this.registerService.GradeSummarySpecific(Student_ID, Years, Semester);
  }

  @Get('/Student/Course/Sec/:Year/:Course_ID/:Section')
  GetDataBySpecificSection(@Param('Course_ID') Course_ID: string,
        @Param('Section') Section: number,
        @Param('Year') Year: string) {
      return this.registerService.GetDataBySpecificSection(Year, Course_ID, Section);
  }

  @Delete('/Drop/:Student_ID/:Year/:Course_ID')
  DropCourse(@Param('Student_ID') Student_ID: string,
          @Param('Year') Year: string,
          @Param('Course_ID') Course_ID: string) {
      return this.registerService.DropCourse(Student_ID, Year, Course_ID);
  }

}
