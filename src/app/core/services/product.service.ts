import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private items : ProductItem[] = [
    new ProductItem(1,'Saxophone',300,'jazzy')
  
  ];
  
  

  getProducts(): Observable<ProductItem[]>{
    // return this.http.get('/assets/mockData/products.json');
    return of(this.items);
  }

  getProductById(id: number): Observable<ProductItem | undefined> {
    return of(this.items.find(p => p.id === id));
  }

}
