import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductmasterComponent } from './productmaster/productmaster.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  { path: '',pathMatch:"full",redirectTo:'home'},
  { path: 'productmaster',component:ProductmasterComponent},
  { path: 'category',component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
