import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shirt } from '../shirt-list/Shirt';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantity: number;

  @Input()
  max: number;

  @Input()
  min: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  upQuantity() : void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity() : void{
    if(this.quantity > this.min){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  setQuantity(event) : void{
    let validKey: boolean = this.validateKey(event.key);
    console.log(event.key);

    if(validKey){
      if(this.quantity > this.max){
        this.quantity = this.max;
      } else if(this.quantity < this.min || this.quantity == NaN){
          this.quantity = 0;
      }
      this.quantityChange.emit(this.quantity);
    } else {
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
    }
  }


  // comprueba que la key presionada en el input sea valida
  validateKey(key) : boolean{
    let listOfNumbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let listOfKeys: Array<string> = ['Backspace', 'Control', 'Alt', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    let maxItemsQuantity: number = 0;

    /*
      Comprueba cual arreglo tiene más elementos y lo utiliza para iterar la key entrante y así no dejar cosas sin comprobar
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
