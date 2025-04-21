import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  constructor(private productSerive: ProductService, private route: ActivatedRoute){}

  productDetail: any;

  ngOnInit(): void {
    this.route.
      paramMap.subscribe(
        (param: ParamMap) => {
        let id = param.get('id');

        if(id){
          this.productSerive.
            getProductById(parseInt(id)).
              subscribe(
                detail => this.productDetail = detail);
        }
      });
  }

}
