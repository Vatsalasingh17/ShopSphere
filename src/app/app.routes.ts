import { Routes } from '@angular/router';

import {Home} from './pages/home/home';
import {Products} from './pages/products/products';
import {ProductDetails} from './pages/product-details/product-details';
import {Cart} from './pages/cart/cart';
import {Wishlist} from './pages/wishlist/wishlist';
import {Login} from './pages/login/login';
import {Register} from './pages/register/register';
import {Checkout} from './pages/checkout/checkout';
import {Orders} from './pages/orders/orders';


export const routes: Routes = [

    {
        path: '',
        component:Home
    },

    {
        path:'products',
        component:Products
    },
    {
        path:'products/:id',
        component:ProductDetails
    },
    {
        path:'cart',
        component:Cart
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'register',
        component:Register
    },
    {
        path:'checkout',
        component:Checkout
    },
    {
        path:'orders',
        component:Orders
    },
    {
        path:'**',
        redirectTo:''
    },
    {
        path:'wishlist',
        component:Wishlist
    }
];
