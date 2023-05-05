import { Component, Input } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Category } from '../category';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent {
  @Input() transaction?: Transaction;

  account = new Account(0,0,'',0,'');
  category = new Category(0,0,'',0);

  constructor (
    private service: AccountService
  ) {}

  ngOnInit() {
    this.getAccount();
    this.getCategory();
  }

  getAccount() {
    if (this.transaction!=null) {
      this.service.getAccount(this.transaction.accountid)
        .subscribe(account=>
          this.account=account);
    }
  }

  getCategory() {
    if (this.transaction!=null) {
      this.service.getCategory(this.transaction.categoryid)
        .subscribe(category=>
          this.category=category);
    }
  }
}
