import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Noticia } from 'src/app/modelo/noticia';
import { ServicioNoticiasService } from 'src/app/modelo/servicio-noticias.service';
import { ServicioService } from 'src/app/modelo/servicio.service';

@Component({
  selector: 'form-noticia',
  templateUrl: './form-noticia.component.html',
  styleUrls: ['./form-noticia.component.css']
})
export class FormNoticiaComponent implements OnInit {

  frmBlogNoticias!: FormGroup;
  title!: FormControl;
  noticie!: FormControl;

  constructor(public servicioNoticias: ServicioNoticiasService, public servicio: ServicioService) { }

  ngOnInit(): void {
    this.title = new FormControl('', [Validators.required]);
    this.noticie = new FormControl('', [Validators.required]);
    
    this.frmBlogNoticias = new FormGroup({
      title: this.title,
      noticie: this.noticie
    });
  }

  anadirNoticia(){
    this.servicioNoticias.anadirNoticia(this.title.value, this.noticie.value);
    this.frmBlogNoticias.reset();
  }

  pulsaTecla($event: KeyboardEvent) {
    if($event.key === "Enter" && !this.frmBlogNoticias.invalid){
      this.anadirNoticia();
    }
  }

}
