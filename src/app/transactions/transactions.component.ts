import { Component } from '@angular/core';
import { Transaction } from '../transaction';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactions: Transaction[] = [];
  selectedTransaction?: Transaction;

  add=false;

  showDetails=false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  clickAdd(): void {
    this.add=!this.add;
  }

  getTransactions(): void {
    this.accountService.getTransactions()
      .subscribe(transactions => this.transactions = transactions);
  }

  onSelect(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }

  switchShowDetails() {
    this.showDetails= !this.showDetails;
  }

}
