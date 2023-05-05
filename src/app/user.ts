export class User {
    userid: number;
    password: string;
    fname: string;
    lname: string;
    email: string;

    constructor (
        userid: number,
        password: string,
        fname: string,
        lname: string,
        email: string,
    ) {
        this.userid=userid;
        this.password=password;
        this.fname=fname;
        this.lname=lname;
        this.email=email;
    }
}