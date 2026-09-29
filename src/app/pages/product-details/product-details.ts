import { Component ,inject} from '@angular/core';
import {ActivatedRoute,RouterLink} from '@angular/router';
import {ProductService} from  '../../services/product';
import {Product} from '../../models/product';

@Component({
  imports: [RouterLink],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {

  private route=inject(ActivatedRoute);

  private productService=inject(ProductService);

  product:Product|undefined;

  constructor()
  {
     const id = Number(
      this.route.snapshot.paramMap.get('id')
     );

     this.product=this.productService.getProductById(id);
  }
}
