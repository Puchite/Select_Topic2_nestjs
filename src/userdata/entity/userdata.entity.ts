import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserdataEntity {
  @PrimaryColumn()
  Student_ID: string;

  @Column({ nullable: false })
  Password: string;

  @Column({ nullable: false })
  Name: string;

  @Column({ nullable: false })
  Surname: string;

  @Column({ nullable: false })
  Location: string;

  @Column({ nullable: false })
  Phone_Number: string;

  @Column({ nullable: false })
  Major: string;

  @Column({ nullable: false })
  Bracnh: string;

  @Column({ nullable: false })
  Gender: string;

  @Column({ nullable: false })
  Years: number;

  @Column({ nullable: false })
  Indentity_ID: string;
}
