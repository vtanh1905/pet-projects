import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserImportsEntity } from '../../database/entities';
import {
  UserImportsRepository,
  UsersRepository,
} from '../../database/repositories';
import { ImportsController } from './imports.controller';
import { ImportsService } from './imports.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserImportsEntity])],
  controllers: [ImportsController],
  providers: [ImportsService, UserImportsRepository, UsersRepository],
})
export class ImportsModule {}
