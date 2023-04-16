import { Component } from '@angular/core';

import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent {
  submitted=false;
  model = new Account(0,'',0);

  constructor (private accountService: AccountService) {}

  onSubmit() {
    console.log(this.model.userid);
    this.accountService.addAccount(this.model)
      .subscribe(account => console.log(account.accountid));
    
    this.submitted=true;
  }
}
