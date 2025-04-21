import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../../../core/models/product.model';
import { ProductCardComponent } from '../../../shared/product-card/product-card.component';
import { NgForOf } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'product-list',
  imports: [ProductCardComponent, NgForOf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  items : ProductItem[] = [];

  // Inject Dependancies 
  constructor(private productService: ProductService, private router: Router){}

  //On initialization load items into list
  ngOnInit(): void {
    this.
      productService.getAllProducts().
        subscribe((data: any) => {
          this.items = data;
        });
  }

  //Navigate to /product/:{id} when clicked
  goToProductDetail($event: number) {
    this.router.navigate(['/products', $event]);

  }
}
