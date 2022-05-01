import { PrimaryColumn } from 'typeorm';

export class RegisterEntity {
  @PrimaryColumn()
  Register_ID: string;
  @PrimaryColumn()
  Student_ID: string;
  @PrimaryColumn()
  Course_ID: string;
}
