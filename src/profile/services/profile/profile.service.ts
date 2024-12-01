/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { CreateProfileParams } from 'src/utils/types';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectDataSource() private dataSource: DataSource
  ) {}

  // Retrieves profile data (this could include more complex logic)
  findProfile() {
    return this.profileRepository.find();
  }

  // Call the MySQL stored procedure to create a profile
  async createProfile(createProfileDto: CreateProfileParams) {
    const { address, phoneNumber, email } = createProfileDto;

    try {
      // Call the stored procedure in MySQL
      const result = await this.dataSource.query(
        `CALL createProfile(?, ?, ?)`,
        [address, phoneNumber, email]
      );
      
      // Return the result (You can process the result as needed)
      return result;
    } catch (error) {
      throw new Error(`Error while creating profile: ${error.message}`);
    }
  }
}
