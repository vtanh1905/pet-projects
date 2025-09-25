import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email, phone, date_of_birth } = createUserDto;

    return this.usersService.createUser({
      name,
      email,
      phone,
      date_of_birth,
    });
  }
}
