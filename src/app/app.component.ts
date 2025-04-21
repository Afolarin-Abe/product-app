import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { ProductItem } from './core/models/product.model';
import { ProductService } from './core/services/product.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';

  items : ProductItem[] = [
    new ProductItem(1,'Saxophone',300,'jazzy'),
    new ProductItem(2,'Guitar',5000,'Plays dope music')
  ];
}
