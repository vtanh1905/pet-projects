import { Injectable } from '@nestjs/common';
import { UserImportsRepository } from '../../database/repositories';
import { DataSource } from 'typeorm';
import { UserImportsEntity, UsersEntity } from '../../database/entities';
import { readCSVFile } from '../../common/helpers/file.helper';
import { UserImportStatus } from '../../common/enums';

@Injectable()
export class ImportsService {
  constructor(
    private readonly userImportsRepository: UserImportsRepository,
    private readonly dataSource: DataSource,
  ) {}

  getUsersImports(): Promise<UserImportsEntity[]> {
    return this.userImportsRepository.find();
  }

  async importUsers(file: Express.Multer.File) {
    const usersFromCSV = await readCSVFile<UsersEntity>(file);

    // @TODO: Validate the data from CSV

    return await this.dataSource.transaction(async (entityManager) => {
      const users = entityManager.create(UsersEntity, usersFromCSV);
      await entityManager.save(UsersEntity, users);

      const userImport = entityManager.create(UserImportsEntity, {
        file_name: file.originalname,
        status: UserImportStatus.SUCCESS,
      });
      await entityManager.save(UserImportsEntity, userImport);

      return 1;
    });
  }
}
