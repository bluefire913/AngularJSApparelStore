import { Component, OnInit } from '@angular/core';
import {Product } from '../product';
import { ProductlistingService } from '../productlisting.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categorylistcomponent',
  templateUrl: './categorylistcomponent.component.html',
  styleUrls: ['./categorylistcomponent.component.css']
})
export class CategorylistcomponentComponent implements OnInit {

  products: Product[];
  constructor(private productService:ProductlistingService,  private route: ActivatedRoute) { }
  getCategories(){
      const id = this.route.snapshot.paramMap.get('id');
      this.productService.getProductsForCategory(id);
  }
  ngOnInit() {
  }

}
