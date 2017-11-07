import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { categories } from '../category/categories'
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

     
    private productURL="http://localhost:5000/api";

    constructor(private _http:Http){

    }

    getCategory(){
      return this._http.get(this.productURL + '/categories')
              .map(res => res.json());
    }

    addCategory(newCategory){
       var headers=new Headers();
       headers.append('Content-Type','application/json');

       return this._http.post(this.productURL + '/categories',newCategory,{headers:headers})
              .map(res => res.json());
    }
    deleteCategory(id){
        return this._http.delete(this.productURL + '/categories/'+id)
                      .map(res => res.json());
    }

}
