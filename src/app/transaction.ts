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
        userid: number,
        accountid: number,
        categoryid: number,
        amount: number,
        date: string,
        name: string,
        comment: string,
    ) {
        this.transactionid = transactionid;
        this.userid = userid;
        this.accountid= accountid;
        this.categoryid = categoryid;
        this.amount=amount;
        this.date =date;
        this.name=name;
        this.comment=comment;
    }
}