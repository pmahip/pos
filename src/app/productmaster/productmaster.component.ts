import { Component, OnInit } from '@angular/core';
import {ProductmasterService} from'./productmaster.service'
import {product} from'../productmaster/product'


@Component({
  selector: 'app-productmaster',
  templateUrl: './productmaster.component.html',
  styleUrls: ['./productmaster.component.css'],
  providers : [ProductmasterService]
})
export class ProductmasterComponent implements OnInit {

  products: product[];
  product: product;
  productname:string;
  pageTitle:string="Add Products"

  constructor(private _productmasterService : ProductmasterService) { }

  ngOnInit() {
    this._productmasterService.getProductmaster().subscribe(products => this.products = products);
  }

   addProducts() {
      var newProduct ={
        productname:this.productname
      }
      this._productmasterService.addProductmaster(newProduct)
        .subscribe(product =>{
          this.products.push(product);
          this._productmasterService.getProductmaster().subscribe(products => this.products = products);
          this.productname="";
        });
  }

  deleteProduct(id:any){
    var products=this.products;
    this._productmasterService.deleteProductMaster(id)
        .subscribe(data =>{

            for(var i=0; i<products.length;i++)
            {
              if(products[i]._id==id)
              {
                this.products.splice(i,1);
              }
            }

      });
  }

}
