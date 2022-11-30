import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'estilo',
  templateUrl: './estilo.component.html',
  styleUrls: ['./estilo.component.css']
})
export class EstiloComponent implements OnInit {

  @Input() oscuro!: Boolean;
  @Output() establecerOscuro: EventEmitter<null>;

  constructor() { 
    this.establecerOscuro = new EventEmitter<null>();
  }

  cambiarOscuro(){
    this.establecerOscuro.emit();
  }

  ngOnInit(): void {
  }

}
