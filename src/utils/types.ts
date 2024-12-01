/* eslint-disable prettier/prettier */
export type CreateUserParams = {
    name: string;
    password: string;
    email:string;
    profileImageKey:string;
  };
  export type CreateProfileParams = {
    phoneNumber: string;
    email:string;
    address: string;
  };