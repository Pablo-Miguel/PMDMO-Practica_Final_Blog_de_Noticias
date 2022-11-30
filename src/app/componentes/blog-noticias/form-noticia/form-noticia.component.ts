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
  frmTitulo!: FormControl;
  frmNoticia!: FormControl;

  constructor(public servicioNoticias: ServicioNoticiasService, public servicio: ServicioService) { }

  ngOnInit(): void {
    this.frmTitulo = new FormControl('', [Validators.required]);
    this.frmNoticia = new FormControl('', [Validators.required]);
    
    this.frmBlogNoticias = new FormGroup({
      user: this.frmTitulo,
      pass: this.frmNoticia
    });
  }

  anadirNoticia(){
    this.servicioNoticias.anadirNoticia(this.frmTitulo.value, this.frmNoticia.value);
    this.frmBlogNoticias.reset();
  }

  pulsaTecla($event: KeyboardEvent) {
    if($event.key === "Enter" && !this.frmBlogNoticias.invalid){
      this.anadirNoticia();
    }
  }

}
