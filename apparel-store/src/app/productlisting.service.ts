import { Injectable } from '@angular/core';
import {Product } from './product';
@Injectable()
export class ProductlistingService {
  constructor() {

   }

 getProductsForCategory(id:string) :Product[] {  return [{    name:"Arrow Checkered Shirt",
     code:"ac-12",
     description:"Pullover with Ribbed Hems",
     image_small:"assets/product/images_list/ac-12.jpg",
     image_list:"assets/product/images_list/arrow_model.jpg",
     price:"Rs 3250",
     orginal_price:"Rs 3250",
     discount:50
 },
 {
     name:"RedTape Checkered Shirt",
        code:"red-12",
        description:"Button-Down Polo Shirt",
        image_small:"assets/product/images_list/red-12.jpg",
        image_list:"assets/product/images_list/red_tape.jpg",
        price:"Rs 3145",
        orginal_price:"Rs 3250",
        discount:50
 },
 {    name:"Arrow Checkered Shirt",
     code:"ac-12",
     description:"Pullover with Ribbed Hems",
     image_small:"assets/product/images_list/ac-12.jpg",
     image_list:"assets/product/images_list/arrow_model.jpg",
     price:"Rs 3450",
     orginal_price:"Rs 3250",
     discount:50
 },
 {
     name:"RedTape Checkered Shirt",
        code:"red-12",
        description:"Pullover with Ribbed Hems",
        image_small:"assets/product/images_list/red-12.jpg",
        image_list:"assets/product/images_list/red_tape.jpg",
        price:"Rs 3500",
        orginal_price:"Rs 3250",
        discount:50
 }];}
}
