import { Component } from '@angular/core';

import { Category } from '../category';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: Category[] = [];
  selectedCategory?: Category;

  add=false;

  showDetails = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  clickAdd(): void {
    this.add=!this.add;
  }

  getCategories(): void {
    this.accountService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  switchShowDetails() {
    this.showDetails= !this.showDetails;
  }
}
