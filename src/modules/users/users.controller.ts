import { UsersService } from './users.service';
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user-dto';
import { QueryDto } from './dto/query-dto';

@Controller('api/v1/users')
@ApiTags('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Post()
    createUser(@Body() user: UserDto ) {
        return this.userService.createUser(user);
    }

    @Get()
    getUsers(@Query() query: QueryDto){
        const { start, end, searchText } = query;
        return this.userService.getUsers(start, end, searchText);
    }
}
