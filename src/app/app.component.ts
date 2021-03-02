import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular001';
  diaSemana:string = "Domingo";  
  edad:number = 8;
  sumar(x:number, y:number){
return x+y;
  }

  cadenaTexto:string = "Ingrese su nombre";
}
