import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-list-update',
  templateUrl: './list-update.component.html',
  styleUrls: ['./list-update.component.css']
})
export class ListUpdateComponent implements OnInit {
  lstProduct: any = []; //created for loop in view(UI) 
  lstLocalStorage:any = [];
  activeindex:number;
  product:any;
  objProduct: any = {
    name: "",
    qty: 0,
    price: 0,
  };
  // constructor(private _productservice:ServiceService) { }
  constructor(private router:Router,private  activateRoute:ActivatedRoute) { }
  ngDoCheck(){
    let index:any;
    this.activateRoute.params.subscribe(params =>{
      console.log(params['id']);
      index=params['id'];
      this.objProduct=this.lstProduct[index];
      console.log(this.objProduct);

    });

  }
  ngOnInit() {
    
    let jsonStr = localStorage.getItem('$product'); // getting data from local storage 
    if(jsonStr)// if has data 
    {
     let products = JSON.parse(jsonStr); // convert from string to json object back 
     this.lstProduct = products;   //
    }
    

   }
  // ngAfterViewInit(product){
  //   this.objProduct=product;
  //   console.log(product);
  // }

  onUpdate(){
    let index=this.lstProduct.indexOf(this.objProduct);
    console.log(index);
    if(index>-1){
      alert("Update Success");
      this.lstProduct.splice(index,1);
      this.lstProduct.push(this.objProduct);
      localStorage.clear();
      localStorage.setItem("$product",JSON.stringify(this.lstProduct));
      this.objProduct={};
    }
    
  }

}
