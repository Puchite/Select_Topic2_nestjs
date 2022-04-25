import { UserdataEntity } from './../../entity/userdata.entity';
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StringifyOptions } from 'querystring';
import { UserdataDto } from 'src/userdata/dto/userdata.dto/userdata-dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserdataService {
  public userdata: UserdataDto[] = [];

  constructor(
    @InjectRepository(UserdataEntity)
    private userdataRepository: Repository<UserdataEntity>,
  ) {}

  Load_UserData(): Promise<UserdataDto[]> {
    return this.userdataRepository.query('SELECT * FROM Userdata');
  }

  Load_UserData_Student_ID(Student_ID: string, Password: string): Promise<UserdataDto[]> {
    this.userdataRepository.query('SELECT * FROM Userdata WHERE (Student_ID="'+Student_ID+'" AND Password="'+Password+'")').then(data => {
      if(data.length != 0)
      {
        console.log(data);
      }
    })
    return this.userdataRepository.query('SELECT * FROM Userdata WHERE (Student_ID="'+Student_ID+'" AND Password="'+Password+'")');
  }
}
