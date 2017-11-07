import { Component, OnInit } from '@angular/core';
import {CategoryService} from'./category.service'
import {categories} from'../category/categories'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers : [CategoryService]
})
export class CategoryComponent implements OnInit {

  categories: categories[];
  category: categories;
  categoryname:string;
  pageTitle:string="Add Category"

  constructor(private _categoryService : CategoryService) { }

  ngOnInit() {
    this._categoryService.getCategory().subscribe(categories => this.categories = categories);
  }

   addCategory() {
     
      var newCategory ={
        categoryname:this.categoryname
      }
      this._categoryService.addCategory(newCategory)
        .subscribe(category =>{
          this.categories.push(category);
         
          this._categoryService.getCategory().subscribe(categories => this.categories = categories);
          this.categoryname="";
        });
  }

  deleteCategory(id:any){
    var categories=this.categories;
    this._categoryService.deleteCategory(id)
        .subscribe(data =>{

            for(var i=0; i<categories.length;i++)
            {
              if(categories[i]._id==id)
              {
                this.categories.splice(i,1);
              }
            }

      });
  }
}
