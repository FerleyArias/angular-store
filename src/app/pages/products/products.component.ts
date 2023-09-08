import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  standalone: true,
  imports: [
    ProductComponent,
    CommonModule
  ],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  http = inject(HttpClient)
  products: Product[] = [];

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      })
  }
}
