import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  x = 'demo se pasa de Padre a Hijo';
  total:number=0;

  recibirEvento(e:any){
    console.log(e);
    this.total=e;
  }
}
  