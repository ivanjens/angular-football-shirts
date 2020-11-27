import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShirtCartService } from '../shirt-cart.service';
import { Shirt } from '../shirt-list/Shirt';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  cartList$: Observable<Shirt[]>;

  constructor(private cart: ShirtCartService) {
    this.cartList$ = cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

  // muestra un alert con el error recibido por parametro
  showError(msg): void{
    alert(msg);
  }

}
