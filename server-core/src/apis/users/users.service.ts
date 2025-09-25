import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../database/repositories/users.repository';
import { CreateUserData } from './interfaces';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getUsers() {
    return this.usersRepository.find();
  }

  async createUser(createUserData: CreateUserData) {
    const { name, email, phone, date_of_birth } = createUserData;

    await this.usersRepository.insert({
      name,
      email,
      phone,
      date_of_birth: date_of_birth,
    });

    return true;
  }
}
