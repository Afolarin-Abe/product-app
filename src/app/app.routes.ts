import { Routes } from '@angular/router';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductDetailComponent } from './features/product/product-detail/product-detail.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: '**', component: NotFoundComponent },
];
