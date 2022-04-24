import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterController } from './controller/register/register.controller';
import { RegisterEntity } from './entity/register.entity';
import { RegisterService } from './service/register/register.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterEntity])],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
