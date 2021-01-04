import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  lstProduct: any = []; //created for loop in view(UI) 
  lstLocalStorage:any = [];
  activeindex:number;

  objProduct: any = {
    name: "",
    qty: 0,
    price: 0,
  };
  // constructor(private _productservie: ServiceService) {}
  constructor(private router:Router){}
  ngOnInit() {
   let jsonStr = localStorage.getItem('$product'); // getting data from local storage 
   if(jsonStr)// if has data 
   {
    let products = JSON.parse(jsonStr); // convert from string to json object back 

    this.lstProduct = products;   //
   }
   
  
  }

  onSaveProduct() {
    this.lstLocalStorage = [];
    this.lstLocalStorage = this.lstProduct;
    this.lstLocalStorage.push(this.objProduct);
    localStorage.setItem("$product", JSON.stringify(this.lstLocalStorage));
    console.log(this.objProduct);
    this.objProduct={};
  }

  onDelete(index: number) {
    // console.log(index);
    this.lstProduct.splice(index,1);
    localStorage.clear();//this clears the localStorage completely
    this.lstLocalStorage = this.lstProduct;
    localStorage.setItem("$product", JSON.stringify(this.lstLocalStorage));
    // this.lstProduct={};

  }
  // onEdite(product){
  // this.objProduct=product;
  //   console.log(product);
  // }
  // onUpdate(){
  //   let index=this.lstProduct.indexOf(this.objProduct);
  //   console.log(index);
  //   if(index>-1){
  //     this.lstProduct.splice(index,1);
  //     this.lstProduct.push(this.objProduct);
  //     localStorage.clear();
  //     localStorage.setItem("$product",JSON.stringify(this.lstProduct));
  //   }
  // }

}
