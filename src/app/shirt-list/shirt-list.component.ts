import { Component, OnInit } from '@angular/core';
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
      stock: 5,
      image: 'assets/img/river-plate.png',
    },
    {
      team: 'Boca Juniors',
      season: '19/20',
      type: 'Titular',
      price: 49.99,
      stock: 5,
      image: 'assets/img/boca-juniors.png',
    },
    {
      team: 'River Plate',
      season: '19/20',
      type: 'Suplente',
      price: 49.99,
      stock: 5,
      image: 'assets/img/river-plate-suplente.png',
    },
    {
      team: 'Boca Juniors',
      season: '19/20',
      type: 'Suplente',
      price: 49.99,
      stock: 5,
      image: 'assets/img/boca-juniors-suplente.png',
    },
    {
      team: 'Racing Club',
      season: '19/20',
      type: 'Titular',
      price: 49.99,
      stock: 0,
      image: 'assets/img/racing-club.png',
    },
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
