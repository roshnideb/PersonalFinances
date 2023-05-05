export class Category {
    categoryid: number;
    userid: number;
    name: string;
    budget: number;

    constructor (
        categoryid: number,
        userid: number,
        name: string,
        budget: number,
    ) {
        this.categoryid = categoryid;
        this.userid = userid;
        this.name = name;
        this.budget = budget;
    }
}