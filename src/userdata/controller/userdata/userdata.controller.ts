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
  loadAll(): Promise<UserdataDto[]> {
    return this.userdataService.loadAllS();
  }
}
