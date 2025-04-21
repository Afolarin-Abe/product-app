import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./features/product/product-list/product-list.component";
import { NavbarComponent } from "./features/layout/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
