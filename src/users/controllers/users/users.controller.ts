/* eslint-disable prettier/prettier */
import { Body, Controller,Get,Param,Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dt';
import { LoginUserDto } from 'src/users/dtos/LoginDto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
constructor(private userService:UsersService){}
@Get()
getUsers() {
  return this.userService.findUsers();
}

    @Post()
    createUser(@Body() createUserDto:CreateUserDto){
      
     return this.userService.createUser(createUserDto)
    }
    @Get(':email') // Define a route with email as a dynamic parameter
    getUserByEmail(@Param('email') email: string) {
      return this.userService.findUserByEmail(email);
    }


    @Post('login') // POST route for login
    async login(@Body() loginUserDto: LoginUserDto) {
      try {
        const { email, password } = loginUserDto;
        const result = await this.userService.loginUser(email, password);
        
        return result; 
      } catch (error) {
        throw new Error('Login failed: ' + error.message);
      }
    }
  
}
