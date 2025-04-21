import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ProductItem } from '../../core/models/product.model';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() item!: ProductItem;
  @Output() viewDetails = new EventEmitter<number>();

  onViewDetails() {
    this.viewDetails.emit(this.item.id);
    console.log("Directing to " + this.item.name + " page..."); 
  }


}
