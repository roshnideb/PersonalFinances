import { Component } from '@angular/core';

import { Category } from '../category';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  submitted=false;
  model = new Category(0,'',0);

  constructor (private accountService: AccountService) {}

  onSubmit() {
    this.accountService.addCategory(this.model);
    this.submitted=true;
  }
}
