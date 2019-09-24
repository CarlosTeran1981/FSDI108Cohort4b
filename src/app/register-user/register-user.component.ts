import { user} from './../models/user';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  model: user = new user ();
  passRetype: string = '';
  passDontMatch: boolean = false;
  errorOnEmail: boolean = false;

  constructor(private data : DataService) {}

  ngOnInit() {}

  isValidEmail(email: string): boolean {
    if( !email ) return false; // its empty

    if(email.includes("@") && email.includes('.')){
      return true; // its a valid one
    }

    return false;
  }

  saveUser() {
    //to do:Compare both passwords
    if (this.model.password != this.passRetype){
      this.passDontMatch = true;
    }
    else if(!this.isValidEmail(this.model.email)){
        this.errorOnEmail = true;
    }
    
    else {
      this.passDontMatch = false;
      this.errorOnEmail = false;
     //save the model
    this.data.addUser(this.model);

    //clear the form so user can create more
    this.model = new user();
    this.passRetype = "";

  }
 }
}
