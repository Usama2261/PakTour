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
    this._account.createUser(this.user)
      .subscribe((result) => {

      });
  }

}
