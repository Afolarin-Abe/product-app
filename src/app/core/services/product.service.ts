import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

   items : ProductItem[] = [
      new ProductItem(1,'Saxophone',300,'Make sweet Jazz tunes'),
      new ProductItem(2,'Guitar',5000,'An awesome tool to make musicertgggggggggg gggggggggg gggggggggggggg ggggggggggggggggg ggggggg ggggggggggg gggggggggg ggggggggggggggggggggggggggggggggggggggggggggggggggggggg'),
      new ProductItem(3,'Saxophone',300,'Make sweet Jazz tunes'),
      new ProductItem(4,'Saxophone',300,'Make sweet Jazz tunes'),
      new ProductItem(5,'Guitar',5000,'An awesome tool to make music'),
      new ProductItem(6,'Saxophone',300,'Make sweet Jazz tunes'),
      new ProductItem(7,'Saxophone',300,'Make sweet Jazz tunes'),
      new ProductItem(8,'Guitar',5000,'An awesome tool to make music')
  ];
  

  getAllProducts(): Observable<ProductItem[]>{
    // return this.http.get('/assets/mockData/products.json');
    return of(this.items);
  }
  
  getProductById(id: number): Observable<ProductItem | undefined> {
    return of(this.items.find(p => p.id === id));
  }

  /** Does not reach this folder */  
  // getProducts(){
  //   return this.http.get('/assets/mockData/products.json');
  // }


}
