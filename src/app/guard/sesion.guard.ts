import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioService } from '../modelo/servicio.service';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {

  sesion!: Boolean;

  constructor( private router: Router, private servicio: ServicioService) { 
    servicio.isAutentificado$().subscribe(auth => this.sesion = auth);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.sesion){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
      
  }
  
}
