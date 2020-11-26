import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Shirt } from './shirt-list/Shirt';

@Injectable({
  providedIn: 'root'
})
export class ShirtCartService {

  constructor() { }
  
  private _cartList : Shirt[] = [];
  cartList: BehaviorSubject<Shirt[]> = new BehaviorSubject([]);
  
  addToCart(shirt: Shirt) {
    let item : Shirt = this._cartList.find((v1) => v1.team == shirt.team && v1.season == shirt.season && v1.type == shirt.type);
    if(!item){
      this._cartList.push({... shirt});
    } else{
      item.quantity += shirt.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
  
}