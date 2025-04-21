import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ProductItem } from '../../core/models/product.model';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() item!: ProductItem;
  @Output() viewDetails = new EventEmitter<number>();

  onViewDetails() {
    this.viewDetails.emit(this.item.id);
  }

}
