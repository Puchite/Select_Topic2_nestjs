import { IsNumber, IsString } from 'class-validator';

export class UserdataDto {
  @IsString()
  Student_ID: string;
  @IsString()
  Password: string;
  @IsString()
  Name: string;
  @IsString()
  Surname: string;
  @IsNumber()
  GPAX: number;
  @IsString()
  Location: string;
  @IsString()
  Phone_Number: string;
  @IsString()
  Major: string;
  @IsString()
  Bracnh: string;
  @IsString()
  Gender: string;
  @IsNumber()
  Years: number;
  @IsString()
  Indentity_ID: string;
}
