import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _account: AccountService) { }

  user: User = new User();

  ngOnInit() {
  }

  onSave(){
    let model: any = {};
    model["firstName"] = this.user.firstName;
    model["lastName"] = this.user.lastName;
    model["userName"] = this.user.userName;
    model["password"] = this.user.password;
    model["dob"] = this.user.dob;
    model["email"] = this.user.email;
    model["gender"] = this.user.gender;
    // this._account.createUser(this.user)
    //   .subscribe((result) => {

    //   });
  }

}
