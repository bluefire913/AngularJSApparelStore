import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/Of'
import {Category } from './category';

@Injectable()
export class CateogryService {

  constructor() { }

  getCategories() :Category[] {
      return  [
          {
              code:"1",
              name:"Menu",
              url : "#",
              subcategory : [

                      {
                          code:"1",
                         name:"Men",
                         url : "c/men",
                         subcategory :[
                             {
                                code:"1",
                                name:"Shirt",
                                url : "c/men-shirt",
                                subcategory :[]

                        },
                        {
                           code:"1",
                           name:"Pant",
                           url : "c/men/pant",
                           subcategory :[]

                       }
                         ]

                 },
                 {
                    code:"1",
                    name:"Women",
                    url : "c/women",
                    subcategory :[{
                               code:"1",
                               name:"Shirt",
                               url : "c/men/shirt",
                               subcategory :[]

                             },
                             {
                                  code:"1",
                                  name:"Pant",
                                  url : "c/men/pant",
                                  subcategory :[]

                                 }]

                 },
                 {
                     code:"1",
                       name:"Kids",
                       url : "c/kids",
                       subcategory :[
                           {
                              code:"1",
                              name:"Shirt",
                              url : "c/men/shirt",
                              subcategory :[]

                      },
                      {
                         code:"1",
                         name:"Pant",
                         url : "c/men/pant",
                         subcategory :[]

                     }
                       ]

                   },
                   {
                      code:"1",
                      name:"Sale",
                      url : "c/sale",
                      subcategory :[]
                  }
              ]
         }
     ];
  }

}
