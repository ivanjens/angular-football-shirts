import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shirt-list',
  templateUrl: './shirt-list.component.html',
  styleUrls: ['./shirt-list.component.scss']
})
export class ShirtListComponent implements OnInit {

  shirt = {
    team: 'River Plate',
    season: '19/20',
    type: 'Titular',
    price: 49.99,
    stock: 5,
    image: 'assets/img/river-plate.png'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
