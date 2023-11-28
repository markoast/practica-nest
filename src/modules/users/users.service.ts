import { UserDto } from './dto/user-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private _users: UserDto[];

    constructor(){
        this._users = [];
    }

    createUser(user: UserDto){
        const userFound = this._users.find(u => u.id == user.id);

        if(!userFound){
            this._users.push(user);
            console.log(this._users);
            return true;
        }else{
            return false;
        }
    }

    getUsers(start: Date, end: Date, searchText: string){
        console.log(start);

        if(!isNaN(start.getTime()) && !isNaN(end.getTime()) ){
            return this._users.filter(u => u.birthDate.getTime() >= start.getTime() && u.birthDate.getTime() <= end.getTime());
        }else if(!isNaN(start.getTime()) && isNaN(end.getTime()) ){
            return this._users.filter(u => u.birthDate.getTime() >= start.getTime());
        }else if(isNaN(start.getTime()) && !isNaN(end.getTime()) ){
            return this._users.filter(u => u.birthDate.getTime() <= end.getTime());
        }else{
            return this._users;
        }

        //return this._users.filter(n => n.name.toString().toLowerCase().trim().search(searchText.toLowerCase().trim()));

        //return this._users
        
    }
}
