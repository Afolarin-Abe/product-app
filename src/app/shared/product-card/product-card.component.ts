import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ProductItem } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit {
  @Input() item!: ProductItem;
  @Output() viewDetails = new EventEmitter<number>();

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    // this.
    //   productService.getProducts().
    //     subscribe((data: any) => {
    //       this.item = data;
    //     })
  }

  onViewDetails() {
    this.viewDetails.emit(this.item.id);
    console.log(this.item.id);
    
  }

}
