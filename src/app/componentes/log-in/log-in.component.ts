import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/modelo/servicio.service';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @Input() oscuro!: Boolean;

  listaUsuarios!: {user: string, pass: string}[];
  frmInicioSesion!: FormGroup;
  user!: FormControl;
  pass!: FormControl;

  constructor(public servicio: ServicioService, private router: Router) { 
    servicio.getListaUsuarios$().subscribe(mockList => this.listaUsuarios = mockList);
  }

  comprobarUsuario(){
    this.listaUsuarios.forEach(usuario => {
      if(usuario.user === this.user.value){
        if(usuario.pass === this.pass.value){ 
          this.servicio.setAutentificado(true);
          this.router.navigate(['/blog_noticias']);
        } else {
          console.log("Contraseña incorrecta");
        }
      }
    });
  }

  ngOnInit(): void {
    this.user = new FormControl('', [Validators.required]);
    this.pass = new FormControl('', [Validators.required, Validators.minLength(8)]);
    
    this.frmInicioSesion = new FormGroup({
      user: this.user,
      pass: this.pass
    });
  }

}
