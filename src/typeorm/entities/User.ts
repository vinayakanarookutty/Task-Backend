/* eslint-disable prettier/prettier */

import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Profile } from "./Profile";
@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn() // Set 'id' as the primary key with auto-increment
  id: number;

  @Column({ unique: true }) // Make 'email' unique
  email: string;

  @Column()
  name: string;

  @Column()
  createdAt: Date;

  @Column()
  password: string;


  @Column()
  profileImageKey: string;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn({ name: "email", referencedColumnName: "email" }) // Join by email
  profile: Profile;
}
