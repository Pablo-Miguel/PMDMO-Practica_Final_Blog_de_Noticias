import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Noticia } from './noticia';

@Injectable({
  providedIn: 'root'
})
export class ServicioNoticiasService {

  listaNoticias: Noticia[];
  listaNoticias$: BehaviorSubject<Noticia[]>;

  constructor() { 
    this.listaNoticias=[
      new Noticia("Lanzamiento Spider-Man Remastered", "El próximo jueves 15 de febrero se lanzará la nueva saga de Spider-Man para PC"),
      new Noticia("Tesla compra Twitter", "Al parecer el mismo Elon Musk ha decidido finalmente comprar Twitter"),
      new Noticia("Nuevo IPhone 15", "Público fan de Iphone enfadados por la cantidad de móviles consecutivos que sacan con pocos cambios")
    ];

    this.listaNoticias$ = new BehaviorSubject<Noticia[]>(this.listaNoticias);

  }

  getListaNoticias$(): Observable<Noticia[]> {
    return this.listaNoticias$.asObservable();
  }

  anadirNoticia(titulo: String, noticia: String){
    this.listaNoticias.unshift(new Noticia(titulo, noticia));
    this.listaNoticias$.next([...this.listaNoticias]);
  }

  eliminarNoticia(noticia: Noticia) {
    this.listaNoticias = this.listaNoticias.filter((x) => x.getId() !== noticia.getId());
    this.listaNoticias$.next([...this.listaNoticias]);
  }

}
