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

  flag: Boolean;
  frmInicioSesion!: FormGroup;
  user!: FormControl;
  pass!: FormControl;

  constructor(public servicio: ServicioService, private router: Router) { 
    this.flag = false;
  }

  comprobarUsuario(){
    if(this.servicio.comprobarUsuario(this.user.value, this.pass.value)){
      this.flag = false;
      this.servicio.setAutentificado(true);
      this.router.navigate(['/blog_noticias']);
    } else {
      this.flag = true;
    }
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
