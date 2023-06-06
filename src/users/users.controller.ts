import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-users.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  creteUser(@Body() body: CreateUserDto) {
    this.usersService.create(body.email, body.password);
  }
}
