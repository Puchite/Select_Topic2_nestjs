/* eslint-disable prettier/prettier */
import { BadRequestException, Controller, UnauthorizedException } from '@nestjs/common';
import { UserdataDto } from 'src/userdata/dto/userdata.dto/userdata-dto';
import { UserdataService } from 'src/userdata/service/userdata/userdata.service';
import { Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import {
  Body,
  // Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  Req
} from '@nestjs/common';
import { response } from 'express';

@Controller('userdata')
export class UserdataController {
  constructor(
    private userdataService: UserdataService,
    private jwtService: JwtService,
  ) {}

  @Get()
  Load_UserData(): Promise<UserdataDto[]> {
    return this.userdataService.Load_UserData();
  }

  @Get(':Student_ID/:Password')
  Load_UserData_Student_ID(
    @Param('Student_ID') Student_ID: string,
    @Param('Password') Password: string,
  ): Promise<UserdataDto[]> {
    return this.userdataService.Load_UserData_Student_ID(Student_ID, Password);
  }

  @Get('login/:Student_ID/:Password')
  async login(
    @Param('Student_ID') Student_ID: string,
    @Param('Password') Password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.userdataService.fineOne(Student_ID,Password);

    if (!user) {
      throw new BadRequestException('Invalid Student_ID');
    }
    const jwt = await this.jwtService.signAsync({ Student_ID: user.Student_ID });
    response.cookie('jwt', jwt, { httpOnly: true });
    return {
      message: 'success',
    };
  }

  @Get('usertoken')
  async user(@Req() request: Request) {
    try {

    const cookie = request.cookies['jwt']
    const data = await this.jwtService.verifyAsync(cookie);
    console.log(data)
    if(!data){
      throw new UnauthorizedException();
    }
    // const user =await this.userdataService.Check({id:data['id']})
    // const {Password,...result}=user
    return data
  }catch(e){
    throw new UnauthorizedException()
  }
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response){
    response.clearCookie('jwt')

    return{
      message:"Success"
    }
  }
}

