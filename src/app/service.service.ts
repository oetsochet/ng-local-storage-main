import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  lstProduct: any = []; //created for loop in view(UI) 
  objProduct: any = {
    name: "",
    qty: 0,
    price: 0,
  };
  constructor() { }
  getProduct(product){
    return this.objProduct=product;
  }
  //  onEdite(product){
  //   this.objProduct=product;
  //   console.log(product);
  // }
}
