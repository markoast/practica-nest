import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsString, IsEmail, IsDate } from 'class-validator';

export class UserDto{

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    birthDate: Date;
}