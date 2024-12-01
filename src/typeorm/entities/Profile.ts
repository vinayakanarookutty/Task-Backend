/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './User';  // Import the User entity

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  // Foreign key to User, using the email of the user
  @Column()
  email: string;

  // Create one-to-one relationship with User
  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn({ name: "email", referencedColumnName: "email" }) // Link by email
  user: User;
}
