import {Injectable} from '@angular/core';
import {Product} from '../models/product';

@Injectable(
    {
        providedIn:'root'
    }
)

export class ProductService
{
    private products: Product[]=
    [
        {
            id: 1,
            name: "Wireless Headphones",
            prices: 2999,
            category: 'Electronics',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
            description: 'High quality wireless headphones with noise cancellation.',
            rating: 4.5
        },
        {
            id: 2,
            name: 'Smart Watch',
            prices: 4999,
            category: 'Electronics',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
            description: 'Smart watch with fitness tracking and notifications.',
            rating: 4.3
        },
        {
            id: 3,
            name: 'Running Shoes',
            prices: 2499,
            category: 'Fashion',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            description: 'Comfortable running shoes for everyday workouts.',
            rating: 4.6
        },
          
        {
      id: 4,
      name: 'Backpack',
      prices: 1499,
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
      description: 'Stylish and spacious backpack for everyday use.',
      rating: 4.2
        },

            {
      id: 5,
      name: 'Coffee Maker',
      prices: 3499,
      category: 'Home',
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6',
      description: 'Automatic coffee maker for delicious coffee at home.',
      rating: 4.4
    },
    {
      id: 6,
      name: 'Laptop',
      prices: 69999,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
      description: 'Powerful laptop for work, study and entertainment.',
      rating: 4.8
    }
    ];

      getProducts(): Product[] 
      {
        return this.products;
      }

      getProductById(id: number): Product | undefined 
      {
           return this.products.find(product => product.id === id);
      }
}