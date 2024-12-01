/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ProfileuserviewService } from 'src/profileuserview/services/profileuserview/profileuserview.service';

@Controller('profileuserview')
export class ProfileuserviewController { 
    constructor(private profileService: ProfileuserviewService) {}

@Get()
async getProfileUserData() {
  const profileData = await this.profileService.getProfileUserData();
  return profileData;
}}
