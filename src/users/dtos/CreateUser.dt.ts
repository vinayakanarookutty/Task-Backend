/* eslint-disable prettier/prettier */
export class CreateUserDto {
    name: string;
    email:string;
    password: string;
    profileImageKey:string;
  }

  export class CreateProfileDto {
    phoneNumber: string;
    email:string;
    address: string;
  }