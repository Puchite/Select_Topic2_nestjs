/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { UserdataDto } from 'src/userdata/dto/userdata.dto/userdata-dto';
import { UserdataService } from 'src/userdata/service/userdata/userdata.service';
import {
  Body,
  // Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('userdata')
export class UserdataController {
  constructor(private userdataService: UserdataService) {}

  @Get()
  Load_UserData(): Promise<UserdataDto[]> {
    return this.userdataService.Load_UserData();
  }

  @Get(':Student_ID/:Password')
  Load_UserData_Student_ID(@Param('Student_ID') Student_ID: string, @Param('Password') Password: string ): any {
    return this.userdataService.Load_UserData_Student_ID(Student_ID, Password);
  }

}
