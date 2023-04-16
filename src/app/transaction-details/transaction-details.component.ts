import { Component, Input } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent {
  @Input() transaction?: Transaction;
}
