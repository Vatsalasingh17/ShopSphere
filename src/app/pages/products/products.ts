import { Component, inject } from '@angular/core';
import {ProductService} from '../../services/product';
import {Product} from '../../models/product';

import{ProductCard} from '../../components/product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {

  private productService= inject(ProductService);
  products: Product[]=this.productService.getProducts();
}
