import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserdataDto } from 'src/userdata/dto/userdata.dto/userdata-dto';
import { UserdataEntity } from 'src/userdata/entity/userdata.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserdataService {
  public userdata: UserdataDto[] = [];
  constructor(
    @InjectRepository(UserdataEntity)
    private userdataRepository: Repository<UserdataEntity>,
  ) {}
  loadAllS(): Promise<UserdataDto[]> {
    return this.userdataRepository.query('select * from Userdata');
  }
}
