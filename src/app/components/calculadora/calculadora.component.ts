import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  @Output()
  emisor = new EventEmitter();

  @Input()
  titulo: string='';
  num1: number = 0;
  num2: number = 0;
  total: number = 0;

  calcular(op: string) {
    switch (op) {
      case 's':
      this.total= this.num1 + this.num2;
        break;
      case 'r':
        this.total= this.num1 - this.num2;
        break;
      case 'm':
        this.total= this.num1 * this.num2;
        break;
      case 'd':
        this.total= this.num1 / this.num2;
        break;

      default:
        break;
    }

    this.emisor.emit(this.total);
  }


}
