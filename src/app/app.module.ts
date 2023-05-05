import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CategoriesComponent } from './categories/categories.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AccountAddComponent } from './account-add/account-add.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    TransactionsComponent,
    CategoriesComponent,
    AccountDetailsComponent,
    CategoryDetailsComponent,
    TransactionDetailsComponent,
    AddTransactionComponent,
    AddCategoryComponent,
    AccountAddComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
