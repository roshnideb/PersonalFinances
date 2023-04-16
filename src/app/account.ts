export class Account {
    accountid: number;
    userid: number;
    name: string;
    balance: number;
    type: string

    constructor (
        accountid: number,
        name: string,
        balance: number,
    ) {
        this.accountid = accountid;
        this.userid = 1;
        this.name = name;
        this.balance = balance;
        this.type = "";
    }
    
}