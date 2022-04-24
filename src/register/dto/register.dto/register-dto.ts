import { IsNumber, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  Course_ID: string;
  @IsString()
  Student_ID: string;
  @IsNumber()
  Year: number;
}
