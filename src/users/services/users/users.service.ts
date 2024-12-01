/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
   constructor(@InjectRepository(User) private userRepository:Repository<User>){

   }
    findUsers(){
 return this.userRepository.find()
    }
    async findUserByEmail(email: string): Promise<User | null> {
        return await this.userRepository.findOne({ where: { email } });
      }
   async createUser(userDetails:CreateUserParams){
        const saltRounds = 10; // Adjust the number of salt rounds as needed
        userDetails.password = await bcrypt.hash(userDetails.password, saltRounds);
        const newUser = this.userRepository.create({
            ...userDetails,
            createdAt: new Date(),
          });
          return this.userRepository.save(newUser);
    }
    async loginUser(email: string, password: string) {
     
        const user = await this.findUserByEmail(email);
        if (!user) {
            return { statusCode: 404, message: 'User not found' };
        }
    
        // Check if the password matches (assuming bcrypt is used)
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return { statusCode: 401, message: 'Invalid Password' };
        }
    
    
        return {
            statusCode: 200,
            message: 'Login successful',
            user: user,
          };; 
      }
}
