import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ImportsModule } from './imports/imports.module';

@Module({
  imports: [UsersModule, ImportsModule],
})
export class ApisModule {}
