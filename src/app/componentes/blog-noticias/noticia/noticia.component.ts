import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia';
import { ServicioNoticiasService } from 'src/app/modelo/servicio-noticias.service';
import { ServicioService } from 'src/app/modelo/servicio.service';

@Component({
  selector: 'noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Input() noticia!: Noticia;

  constructor(public servicioNoticias: ServicioNoticiasService, public servicio: ServicioService) { }

  ngOnInit(): void {
  }

  eliminarNoticia(){
    this.servicioNoticias.eliminarNoticia(this.noticia);
  }

}
