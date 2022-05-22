/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserdataController } from './controller/userdata/userdata.controller';
import { UserdataEntity } from './entity/userdata.entity';
import { UserdataService } from './service/userdata/userdata.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserdataEntity]),
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '60s' } }),
  ],
  controllers: [UserdataController],
  providers: [UserdataService],
})
export class UserdataModule {}
