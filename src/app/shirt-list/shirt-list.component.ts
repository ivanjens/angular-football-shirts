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
      quantity: 0,
    },
    {
      team: 'Boca Juniors',
      season: '19/20',
      type: 'Titular',
      price: 49.99,
      stock: 5,
      image: 'assets/img/boca-juniors.png',
      quantity: 0,
    },
    {
      team: 'River Plate',
      season: '19/20',
      type: 'Suplente',
      price: 49.99,
      stock: 5,
      image: 'assets/img/river-plate-suplente.png',
      quantity: 0,
    },
    {
      team: 'Boca Juniors',
      season: '19/20',
      type: 'Suplente',
      price: 49.99,
      stock: 5,
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
  

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(shirt: Shirt) : void{
    if(shirt.quantity < shirt.stock){
      shirt.quantity++;
    }
  }

  downQuantity(shirt: Shirt) : void{
    if(shirt.quantity > 0){
      shirt.quantity--;
    }
  }

  setQuantity(event, shirt: Shirt) : void{
    let validKey: boolean = this.validateKey(event.key);
    console.log(event.key);

    if(validKey){
      if(shirt.quantity > shirt.stock){
        shirt.quantity = shirt.stock;
      } else if(shirt.quantity < 0 || shirt.quantity == NaN){
          shirt.quantity = 0;
      }
    } else {
      shirt.quantity = 0;
    }
  }

  validateKey(key) : boolean{
    let listOfNumbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let listOfKeys: Array<string> = ['Backspace', 'Control', 'Alt', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    let maxItemsQuantity: number = 0;

    /*
      Comprueba cual arreglo tiene más elementos y lo utiliza para iterar la key entrante
      Fue pensado por si en un futuro se añaden más teclas 'permitidas'
    */

    if(listOfNumbers.length >= listOfKeys.length){
      maxItemsQuantity = listOfNumbers.length;
    } else{
      maxItemsQuantity = listOfKeys.length;
    }
    
    /* Comprueba si la tecla presionada está dentro de las teclas permitidas para seleccionar el stock*/
    for(let i = 0; i < maxItemsQuantity; i++){
      if((key == listOfNumbers[i] || key == listOfKeys[i]) && key != ' '){
        return true;
      }
    }
  }

}

