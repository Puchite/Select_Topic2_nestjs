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
}
