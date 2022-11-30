import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/modelo/servicio.service';

@Component({
  selector: 'myfooter',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public servicio: ServicioService) { }

  ngOnInit(): void {
  }

}
