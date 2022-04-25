/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
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
}
