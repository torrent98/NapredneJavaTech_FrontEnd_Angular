import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCategory } from './productCategory';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  //Match sa Controllerima na back-endu

  public getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(`${this.apiServerUrl}/productCategories/all`);
  }

  public addProductCategory(productCategory: ProductCategory): Observable<ProductCategory> {
    return this.http.post<ProductCategory>(`${this.apiServerUrl}/productCategories/add`, productCategory);
  }

  public updateProductCategory(productCategoryId:number, productCategory: ProductCategory): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/productCategories/${productCategory.id}/update`);
  }

  public deleteProductCategory(productCategoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/productCategories/delete/${productCategoryId}`);
  }

}
