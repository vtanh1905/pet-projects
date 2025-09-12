import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImportsService } from './imports.service';

@Controller('imports')
export class ImportsController {
  constructor(private readonly importsService: ImportsService) {}

  @Get('users')
  getUsersImports() {
    return this.importsService.getUsersImports();
  }

  @Post('users')
  @UseInterceptors(FileInterceptor('file'))
  importUsers(@UploadedFile() file: Express.Multer.File) {
    return this.importsService.importUsers(file);
  }
}
