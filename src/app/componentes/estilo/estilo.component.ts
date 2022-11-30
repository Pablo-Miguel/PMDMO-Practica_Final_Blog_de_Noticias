import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'estilo',
  templateUrl: './estilo.component.html',
  styleUrls: ['./estilo.component.css']
})
export class EstiloComponent implements OnInit {

  oscuro: Boolean;

  constructor() { 
    this.oscuro = false;
  }

  ngOnInit(): void {
  }

}
