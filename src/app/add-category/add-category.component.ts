import { Component } from '@angular/core';

import { Category } from '../category';
import { AccountService } from '../account.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  submitted=false;
  model = new Category(0,0,'',0);

  constructor (private accountService: AccountService,
    private cookie: CookieService,
    ) {}

  ngOnInit() {
    this.model.userid = parseInt(this.cookie.get('user_id'));
  }

  onSubmit() {
    this.accountService.addCategory(this.model)
      .subscribe(category => {console.log(category.name)});
    this.submitted=true;
    window.location.replace('/profile');
  }
}
