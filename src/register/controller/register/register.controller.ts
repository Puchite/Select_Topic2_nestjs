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
  loadAll(): Promise<RegisterDto[]> {
    return this.registerService.loadAllS();
  }
}
