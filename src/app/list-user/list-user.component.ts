import { Component, OnInit } from '@angular/core';
import { user } from '../models/user';
import { DataService } from '../services/data.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent{

  // list of users to display
  allUsers : user[] = [];

  constructor(private data: DataService) { 
    // put the users from the service into the local array
    this.allUsers = data.getAllUsers(); 
  
  
  }
}


