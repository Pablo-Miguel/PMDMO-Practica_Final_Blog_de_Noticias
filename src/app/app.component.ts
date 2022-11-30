import { Component } from '@angular/core';
import { ServicioService } from './modelo/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  oscuro: Boolean;

  constructor(public servicio: ServicioService) {
    this.oscuro = false;
  }

  cambiarOscuro(){
    this.oscuro = !this.oscuro;
    this.servicio.cambiarOscuro$();
  }

}
