import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia';
import { ServicioNoticiasService } from 'src/app/modelo/servicio-noticias.service';

@Component({
  selector: 'blog-noticias',
  templateUrl: './blog-noticias.component.html',
  styleUrls: ['./blog-noticias.component.css']
})
export class BlogNoticiasComponent implements OnInit {

  //listaNoticias!: Noticia[];

  constructor(public servicioNoticias: ServicioNoticiasService) { 
    //servicioNoticias.getListaNoticias$().subscribe(lista => this.listaNoticias = lista);
  }

  ngOnInit(): void {
  }

}
