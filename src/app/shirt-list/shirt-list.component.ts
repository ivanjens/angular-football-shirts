import { Component, OnInit } from '@angular/core';
import { ShirtCartService } from '../shirt-cart.service';
import { Shirt } from './Shirt';

@Component({
  selector: 'app-shirt-list',
  templateUrl: './shirt-list.component.html',
  styleUrls: ['./shirt-list.component.scss']
})
export class ShirtListComponent implements OnInit {

  shirts: Shirt[] = [
    {
      team: 'River Plate',
      season: '19/20',
      type: 'Titular',
      price: 49.99,
      stock: 15,
      image: 'assets/img/river-plate.png',
      quantity: 0,
    },
    {
      team: 'Boca Juniors',
      season: '19/20',
      type: 'Titular',
      price: 49.99,
      stock: 11,
      image: 'assets/img/boca-juniors.png',
      quantity: 0,
    },
    {
      team: 'River Plate',
      season: '19/20',
      type: 'Suplente',
      price: 49.99,
      stock: 6,
      image: 'assets/img/river-plate-suplente.png',
      quantity: 0,
    },
    {
      team: 'Boca Juniors',
      season: '19/20',
      type: 'Suplente',
      price: 49.99,
      stock: 14,
      image: 'assets/img/boca-juniors-suplente.png',
      quantity: 0,
    },
    {
      team: 'Racing Club',
      season: '19/20',
      type: 'Titular',
      price: 49.99,
      stock: 0,
      image: 'assets/img/racing-club.png',
      quantity: 0,
    },
  ];

  constructor(private cart: ShirtCartService) { 
  }

  ngOnInit(): void {
  }

  // añade una camiseta al carrito
  addToCart(shirt) : void{
    this.cart.addToCart(shirt);
    shirt.stock -= shirt.quantity;
    shirt.quantity = 0;
  }

}

