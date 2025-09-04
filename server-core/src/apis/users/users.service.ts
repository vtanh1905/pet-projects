import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../database/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getUsers() {
    return this.usersRepository.find();
  }
}
