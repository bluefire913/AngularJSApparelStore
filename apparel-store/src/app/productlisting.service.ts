import { Injectable } from '@angular/core';
import {Product } from './product';
@Injectable()
export class ProductlistingService {
  constructor() {

   }

 getProductsForCategory(id:string) :Product[] {  return [{    name:"Arrow Checkered Shirt",
     code:"ac-12",
     description:"Checkered",
     image_small:"assets/product/images_list/ac-12.jpg",
     image_list:"assets/product/images_list/ac-12.jpg",
     price:"345 USD"
 },
 {
     name:"RedTape Checkered Shirt",
        code:"red-12",
        description:"Checkered",
        image_small:"assets/product/images_list/red-12.jpg",
        image_list:"assets/product/images_list/red-12.jpg",
        price:"35 USD"
 },
 {    name:"Arrow Checkered Shirt",
     code:"ac-12",
     description:"Checkered",
     image_small:"assets/product/images_list/ac-12.jpg",
     image_list:"assets/product/images_list/ac-12.jpg",
     price:"345 USD"
 },
 {
     name:"RedTape Checkered Shirt",
        code:"red-12",
        description:"Checkered",
        image_small:"assets/product/images_list/red-12.jpg",
        image_list:"assets/product/images_list/red-12.jpg",
        price:"35 USD"
 }];}
}
