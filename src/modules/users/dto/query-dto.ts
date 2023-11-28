import { Type } from 'class-transformer';
import { IsNotEmpty, IsDate, IsNumberString, IsOptional } from 'class-validator';

export class QueryDto{


    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    public start: Date;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    public end: Date;

    @IsNumberString()
    @IsOptional()
    public searchText: string;
}