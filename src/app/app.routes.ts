import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    //{ path: '', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    // {path: '**', component: ProductListComponent},
    { path: '', component: ProductDetailComponent },
];
