import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent implements OnInit {

  numero: number = 1;
  nombre: string = '';
  apellido: string = '';
  constructor() {

  }

  ngOnInit(): void {

  }

  saludar() {
    console.log('Entre al metodo')
  }

  mandarTexto(event: any): void {
    console.log(event)
    this.nombre = event.target.value;
  }

  disminuir() {
    this.numero--;
  }

  aumentar() {
    this.numero++;
  }
}
