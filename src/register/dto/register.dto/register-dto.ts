import { IsNumber, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  Register_ID: string;

  @IsString()
  Student_ID: string;

  @IsString()
  Course_ID: string;
}
