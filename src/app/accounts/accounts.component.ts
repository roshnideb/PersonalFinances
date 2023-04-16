import { Component, Inject } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


export interface newAccount {
  newid: number;
  newname: string;
  newbalance: number;
}

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent {
  accounts: Account[] = [];
  selectedAccount?: Account;

  newid: number=0;
  newname: string="";
  newbalance: number=0;

  addClicked=false;

  constructor(
    private accountService: AccountService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    console.log("hello");
    this.getAccounts();
  }

  ngOnChange(): void {
    console.log("change");
    this.getAccounts();
  }

  onAddClicked(): void {
    this.addClicked=!this.addClicked;
  }

  /*openDialog(): void {
    const dialogRef = this.dialog.open(AddAccount, {
      data: {accountid: this.newid, name: this.newname, balance: this.newbalance},
    });
  }*/

  getAccounts(): void {
    this.accountService.getAccounts()
      .subscribe(accounts => this.accounts = accounts);
  }

  onSelect(account: Account): void {
    this.selectedAccount = account;
  }

  
}
