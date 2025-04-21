import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { ProductItem } from './core/models/product.model';
import { ProductService } from './core/services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private productService: ProductService){}

  //items! : ProductItem[];
  


  ngOnInit(): void {
    // this.productService.
    //   getProduct().
    //     subscribe(
    //       (data: any) => {
    //         this.items = data;
    //   });
  }
  title = 'test';

  

  

}
