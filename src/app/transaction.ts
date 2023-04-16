export class Transaction {
    transactionid: number;
    userid: number;
    accountid: number;
    categoryid: number;
    amount: number;
    date: string;
    name: string;
    comment: string;

    constructor (
        transactionid: number,
        amount: number,
        date: string,
        name: string,
        comment: string,
    ) {
        this.transactionid = transactionid;
        this.userid = 1;
        this.accountid= 1;
        this.categoryid = 1;
        this.amount=amount;
        this.date =date;
        this.name=name;
        this.comment=comment;
    }
}