import { Component } from '@angular/core';

import { Transaction } from '../transaction';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  submitted=false;
  model = new Transaction(0,0,'','','');

  constructor (private accountService: AccountService) {}

  onSubmit() {
    this.accountService.addTransaction(this.model);
    this.submitted=true;
  }
}
