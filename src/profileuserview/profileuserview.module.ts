/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProfileuserviewController } from './controllers/profileuserview/profileuserview.controller';
import { ProfileuserviewService } from './services/profileuserview/profileuserview.service';
import { ProfileUserView } from 'src/typeorm/entities/UserProfile';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileUserView])],
  controllers: [ProfileuserviewController],
  providers: [ProfileuserviewService]
})
export class ProfileuserviewModule {}
