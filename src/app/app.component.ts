import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  oscuro: Boolean;

  constructor() {
    this.oscuro = false;
  }

  cambiarEstilo(oscuroEvento: Boolean){
    console.log(oscuroEvento);
    this.oscuro = oscuroEvento;
  }

}
