export class Account {
    accountid: number;
    userid: number;
    name: string;
    balance: number;
    type: string

    constructor (
        accountid: number,
        userid: number,
        name: string,
        balance: number,
        type: string,
    ) {
        this.accountid = accountid;
        this.userid = userid;
        this.name = name;
        this.balance = balance;
        this.type = type;
    }
    
}