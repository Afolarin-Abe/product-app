import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  // Inject Dependancies
  constructor(private productSerive: ProductService, private route: ActivatedRoute){}

  productDetail: any;

  // Pages will load when initialized 
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
