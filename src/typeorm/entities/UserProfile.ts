/* eslint-disable prettier/prettier */
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'profile_user_view' })  // The name of the view in MySQL
export class ProfileUserView {
  @PrimaryColumn()
  userId: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  createdAt: Date;

  @Column()
  profileImageKey: string;

  @Column()
  profileId: number;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;
}
