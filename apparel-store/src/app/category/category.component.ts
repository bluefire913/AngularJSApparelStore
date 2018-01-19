import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import { CateogryService } from '../cateogry.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

 categories: Category[] ;
  constructor(private categoryService:CateogryService) { }
  getCategories(): void{
      this.categories=this.categoryService.getCategories();
  }

  ngOnInit() {
      this.getCategories();
  }

}
