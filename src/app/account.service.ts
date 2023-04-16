import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';

import { Account } from './account'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Transaction } from './transaction';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userid = 1;
  private accountsUrl = `http://localhost:8080/api/${this.userid}/accounts`;
  private transactionsUrl = `http://localhost:8080/api/users/${this.userid}/transactions`;
  private categoriesUrl = `http://localhost:8080/api/${this.userid}/categories`;
  
  
  constructor(
    private http: HttpClient
  ) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl)
  }

  getAccount(accountid: number): Observable<Account> {
    const url = `http://localhost:8080/api/accounts/${accountid}`;
    return this.http.get<Account>(url);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsUrl)
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
  }

  getAccountTransactions(accountid: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`http://localhost:8080/api/accounts/${accountid}/transactions`)
  }

  getCategoryTransactions(categoryid: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`http://localhost:8080/api/categories/${categoryid}/transactions`)
  }

  /*private handleError(error: HttpErrorResponse) {
    if (error.status===0) {
      console.error('An error ocurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(()=> new Error('Something happened'));
  }

  getConfig() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        catchError(this.handleError)
      );
  }*/

  addAccount(account: Account): Observable<Account> {
    console.log("adding");
    return this.http.post<Account>(`http://localhost:8080/api/newaccount`, account);
      //.pipe(
        //catchError(this.handleError('addAccount',account))
      //);
    console.log("added");
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`http://localhost:8080/api/newtransaction`, transaction);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`http://localhost:8080/api/newcategory`, category);
  }

  
}
