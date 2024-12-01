/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProfileService } from 'src/profile/services/profile/profile.service';
import { CreateProfileDto } from 'src/users/dtos/CreateUser.dt';

@Controller('profile')
export class ProfileController {
    constructor(private profileService:ProfileService){}


    @Get()
getProfile() {
  return this.profileService.findProfile();
}
    @Post()
    createUser(@Body() createprofile:CreateProfileDto){
      
     return this.profileService.createProfile(createprofile)
    }
 
}
