import { BadRequestException, Injectable } from '@nestjs/common';
import {
  UserImportsRepository,
  UsersRepository,
} from '../../database/repositories';
import { DataSource, In } from 'typeorm';
import { UserImportsEntity, UsersEntity } from '../../database/entities';
import { readCSVFile } from '../../common/helpers/file.helper';
import { UserImportStatus } from '../../common/enums';

@Injectable()
export class ImportsService {
  constructor(
    private readonly userImportsRepository: UserImportsRepository,
    private readonly usersRepository: UsersRepository,
    private readonly dataSource: DataSource,
  ) {}

  getUsersImports(): Promise<UserImportsEntity[]> {
    return this.userImportsRepository.find();
  }

  async importUsers(file: Express.Multer.File) {
    const usersFromCSV = await readCSVFile<UsersEntity>(file);
    const emailsFromCSV = usersFromCSV.map((user) => user.email);

    await this._validateEmailsFromCSV(emailsFromCSV);

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

  async _validateEmailsFromCSV(emails: string[]) {
    const existingUsers = await this.usersRepository.find({
      select: {
        email: true,
      },
      where: {
        email: In(emails),
      },
    });

    if (existingUsers.length) {
      throw new BadRequestException(
        'Some emails already exist in the system.',
        {
          description: `The following emails already exist: ${existingUsers.map((user) => user.email).join(', ')}`,
        },
      );
    }

    return true;
  }
}
