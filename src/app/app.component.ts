import { Component, OnInit } from '@angular/core';
import { ProductCategory } from './productCategory';
import { ProductCategoryService } from './productCategory.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public productCategories: ProductCategory[];
  // public editProductCategories: Employee;
  // public deleteProductCategories: Employee;

  constructor(private productCategoryService: ProductCategoryService){
    this.productCategories = [];
  }

  ngOnInit() {

    this.getProductCategories();

  }

  public getProductCategories(): void {
    this.productCategoryService.getProductCategories().subscribe(
      (response: ProductCategory[]) => {
        this.productCategories = response;
        console.log(this.productCategories);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }

  

}
