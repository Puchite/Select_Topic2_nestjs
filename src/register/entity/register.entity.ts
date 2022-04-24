import { PrimaryColumn } from 'typeorm';

export class RegisterEntity {
  @PrimaryColumn()
  Course_ID: string;
  @PrimaryColumn()
  Student_ID: string;
  @PrimaryColumn()
  Year: number;
}
