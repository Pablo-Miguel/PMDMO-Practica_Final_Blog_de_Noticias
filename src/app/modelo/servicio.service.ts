import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  private oscuro: Boolean;
  private listaUsuarios: { user: string; pass: string; }[];

  private sesion$: BehaviorSubject<Boolean>;
  private oscuro$: BehaviorSubject<Boolean>;
  private listaUsuarios$: BehaviorSubject<{ user: string; pass: string; }[]>;

  constructor() {
    this.oscuro = false;
    this.listaUsuarios = [{user: "pablomiguel", pass: "12345678"}, {user: "marta", pass: "12345678"}, {user: "admin", pass: "12345678"}, {user: "manu", pass: "12345678"}]
    this.sesion$ = new BehaviorSubject<Boolean>(false);
    this.oscuro$ = new BehaviorSubject<Boolean>(this.oscuro);
    this.listaUsuarios$ = new BehaviorSubject<{ user: string; pass: string; }[]>(this.listaUsuarios);
  }

  getOscuro$(): Observable<Boolean> {
    return this.oscuro$.asObservable();
  }

  cambiarOscuro$() {
    this.oscuro = !this.oscuro;
    this.oscuro$.next(this.oscuro);
  }

  getListaUsuarios$(): Observable<{ user: string; pass: string; }[]> {
    return this.listaUsuarios$.asObservable();
  }

  isAutentificado$(): Observable<Boolean> {
    return this.sesion$.asObservable();
  }

  setAutentificado(value: Boolean){
    this.sesion$.next(value);
  }

}
