import { Component } from '@angular/core';

import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-add-an-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {
  submitted=false;
  //model = new Account(0,'',0,'');

  accountTypes = ['Checking','Savings'];

  constructor (private accountService: AccountService) {}

  /*onSubmit() {
    this.accountService.addAccount(this.model)
      .subscribe(account => console.log(account.accountid));
    
    this.submitted=true;

  }*/
}
