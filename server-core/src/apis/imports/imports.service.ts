import { Injectable } from '@nestjs/common';
import { UserImportsRepository } from '../../database/repositories';
import { UserImportsEntity } from '../../database/entities';

@Injectable()
export class ImportsService {
  constructor(private readonly userImportsRepository: UserImportsRepository) {}

  getUsersImports(): Promise<UserImportsEntity[]> {
    return this.userImportsRepository.find();
  }
}
