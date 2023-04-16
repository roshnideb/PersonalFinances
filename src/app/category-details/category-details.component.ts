import { Component, Input } from '@angular/core';
import { Category } from '../category';
import { Transaction } from '../transaction';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  @Input() category?: Category;

  transactions: Transaction[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCategoryTransactions();
  }

  ngOnChanges(): void {
    this.getCategoryTransactions();
  }

  getCategoryTransactions(): void {
    const categoryid = this.category?.categoryid;
    if (categoryid!=undefined) {
      this.accountService.getCategoryTransactions(categoryid)
      .subscribe(transactions => this.transactions = transactions);
      console.log(categoryid);
    }
    
  }

}
