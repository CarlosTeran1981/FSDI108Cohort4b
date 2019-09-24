import { Injectable } from '@angular/core';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isUserLoggedIn : boolean = false;
  private user : user;


  constructor() { }

  public setLoggedIn(isLogged : boolean){
    this.isUserLoggedIn = isLogged;
  }

  public isLogged(){
    return this.isUserLoggedIn;
  }

  public setLoggedUser(theUser : user){
    this.user = theUser;
  }

  public getLogged(){
    return this.user;
  }
}
