import { Component } from '@angular/core';

import { Transaction } from '../transaction';
import { AccountService } from '../account.service';
import { Category } from '../category';
import { Account } from '../account';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  submitted=false;
  model = new Transaction(0,0,0,0,0,'','','');

  userCategories: Category[] = [];
  userAccounts: Account[] = [];


  constructor (private accountService: AccountService,
    private cookie: CookieService) {}

  ngOnInit() {
    this.model.userid = parseInt(this.cookie.get('user_id'));
    this.getUserAccounts();
    this.getUserCategories();
  }

  getUserCategories() {
    this.accountService.getCategories().subscribe(categories=>
      this.userCategories=categories);
  }

  getUserAccounts() {
    this.accountService.getAccounts().subscribe(accounts=>
      this.userAccounts=accounts);
  }

  onSubmit() {
    this.accountService.addTransaction(this.model)
      .subscribe(transaction=>console.log(transaction.name));

    //get the account and category
    //subtract (or add) to the account and category
    
    //window.location.replace('/profile');
    //alert("reloading");
    window.location.reload();

    this.submitted=true;
  }
}
