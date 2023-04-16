import { Component, Input } from '@angular/core';
import { Account } from '../account';
import { Transaction } from '../transaction';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  @Input() account?: Account;

  transactions: Transaction[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccountTransactions();
  }

  ngOnChanges(): void {
    this.getAccountTransactions();
  }

  getAccountTransactions(): void {
    const accountid = this.account?.accountid;
    if (accountid!=undefined) {
      this.accountService.getAccountTransactions(accountid)
      .subscribe(transactions => this.transactions = transactions);
    }
    
  }

  
}
