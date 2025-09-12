import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserImportsEntity } from '../entities';

@Injectable()
export class UserImportsRepository extends Repository<UserImportsEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(UserImportsEntity, dataSource.createEntityManager());
  }
}
