import { Component } from '@angular/core';

import { AccountService } from '../account.service';
import { Account } from '../account';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent {
  submitted=false;
  model = new Account(0,0,'',0,'');

  accountTypes = ['Checking','Savings'];

  constructor (private accountService: AccountService,
    private cookie: CookieService) {}

  ngOnInit() {
    this.model.userid = parseInt(this.cookie.get('user_id'));
  }

  onSubmit() {
    console.log(this.model.userid);
    this.accountService.addAccount(this.model)
      .subscribe(account => console.log(account.accountid));
    
    window.location.replace('/profile');
    this.submitted=true;
  }
}
