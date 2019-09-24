import { Injectable } from '@angular/core';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList: user[] = [];

  constructor() {
    var user = new user();
    user.email = "admin@mail.com";
    user.password = "qwerty";
    user.firstName = "Admin";
    user.lastName = "User";

    this.userList.push(user);
  }

  public sayHello(){
    console.log('Hello Fools');
  }

  public addUser(userVal: user) {
    this.userList.push(userVal);
  }

  public getAllUsers(){
    return this.userList;
  }
}
