/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileUserView } from 'src/typeorm/entities/UserProfile';
@Injectable()
export class ProfileuserviewService {
    constructor(
        @InjectRepository(ProfileUserView) private profileUserViewRepository: Repository<ProfileUserView>
      ) {}
    
      // Get data from the view
      async getProfileUserData() {
        return this.profileUserViewRepository.find();
      }
}
