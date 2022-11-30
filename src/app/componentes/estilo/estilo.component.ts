import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'estilo',
  templateUrl: './estilo.component.html',
  styleUrls: ['./estilo.component.css']
})
export class EstiloComponent implements OnInit {

  @Output() establecerOscuro: EventEmitter<Boolean>;

  oscuro: Boolean;

  constructor() { 
    this.oscuro = false;
    this.establecerOscuro = new EventEmitter<Boolean>();
  }

  cambiarOscuro(){
    this.oscuro = !this.oscuro;
    this.establecerOscuro.emit(this.oscuro);
  }

  ngOnInit(): void {
  }

}
