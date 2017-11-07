import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { product } from '../productmaster/product'
import 'rxjs/add/operator/map';

@Injectable()
export class ProductmasterService {

     
    private productURL="http://localhost:5000/api";

    constructor(private _http:Http){

    }

    getProductmaster(){
      return this._http.get(this.productURL + '/products')
              .map(res => res.json());
    }

    addProductmaster(newProducts){
       var headers=new Headers();
       headers.append('Content-Type','application/json');

       return this._http.post(this.productURL + '/products',newProducts,{headers:headers})
              .map(res => res.json());
    }
    deleteProductMaster(id){
        return this._http.delete(this.productURL + '/products/'+id)
                      .map(res => res.json());
    }

}
