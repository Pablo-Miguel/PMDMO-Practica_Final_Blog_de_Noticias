import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Noticia } from 'src/app/modelo/noticia';
import { ServicioNoticiasService } from 'src/app/modelo/servicio-noticias.service';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.css']
})
export class DetalleNoticiaComponent implements OnInit {

  id!: Number;
  noticia!: Noticia;

  constructor(public servicioNoticia: ServicioNoticiasService, public activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = parseInt(params['id'])
      this.noticia = this.servicioNoticia.getNoticia(this.id)
    });
    console.log(this.id)
  }

}
