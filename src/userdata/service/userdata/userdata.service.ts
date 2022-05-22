/* eslint-disable prettier/prettier */
import { UserdataEntity } from './../../entity/userdata.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StringifyOptions } from 'querystring';
import { UserdataDto } from 'src/userdata/dto/userdata.dto/userdata-dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserdataService {
  query(arg0: string) {
    throw new Error('Method not implemented.');
  }
  public userdata: UserdataDto[] = [];

  constructor(
    @InjectRepository(UserdataEntity)
    private userdataRepository: Repository<UserdataEntity>,
  ) {}

  Load_UserData(): Promise<UserdataDto[]> {
    return this.userdataRepository.query('SELECT * FROM Userdata');
  }

  async Load_UserData_Student_ID(Student_ID: string, Password: string): Promise<any> {

    const user = await this.userdataRepository.query(`SELECT * FROM Userdata WHERE Userdata.Student_ID == ${Student_ID} AND Userdata.Password == ${Password}`)
    
    if(Object.keys(user).length != 0)
    {
      return user;
    }
    
    return false;
  }

  async fineOne(Student_ID:any,Password: string): Promise<any>{
    const user = await this.userdataRepository.query(`SELECT * FROM Userdata WHERE Userdata.Student_ID == ${Student_ID} AND Userdata.Password == ${Password}`)
    
    if(Object.keys(user).length != 0)
    {
      return user;
    }
    
    return false;
  }
    // return await this.userdataRepository.findOne(Student_ID)
  }

  // async Check(connition:any): Promise<any>{
  //   // const user = await this.userdataRepository.query(`SELECT * FROM Userdata WHERE Userdata.Student_ID == ${Student_ID}`)
  //   // return user
  //   return await this.userdataRepository.findOne(connition)
  // }

