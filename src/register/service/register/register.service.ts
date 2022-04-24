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
  loadAllS(): Promise<RegisterDto[]> {
    return this.RegisterRepository.query('select * from Register');
  }
}
