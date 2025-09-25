import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsDateString,
} from 'class-validator';

export default class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;

  @IsDateString()
  date_of_birth: string;
}
