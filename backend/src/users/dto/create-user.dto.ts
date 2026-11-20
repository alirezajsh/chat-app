import { IsEmail, IsNotEmpty, IsString, Length, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Length(3, 100)
  username: string;

}