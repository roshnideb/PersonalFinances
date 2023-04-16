export class Category {
    categoryid: number;
    userid: number;
    name: string;
    budget: number;

    constructor (
        categoryid: number,
        name: string,
        budget: number,
    ) {
        this.categoryid = categoryid;
        this.userid = 1;
        this.name = name;
        this.budget = budget;
    }
}