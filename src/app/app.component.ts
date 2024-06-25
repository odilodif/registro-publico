import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD
  x = 'demo se pasa de Padre a Hijo';
  total:number=0;

  recibirEvento(e:any){
    console.log(e);
    this.total=e;
  }
}
  
=======
  title = 'registropublico';
}
>>>>>>> cd4fc20 (first commit2)
