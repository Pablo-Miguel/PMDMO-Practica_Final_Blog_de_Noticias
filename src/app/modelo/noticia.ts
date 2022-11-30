export class Noticia {
  private static idCont: number = 0;
  private id: Number;

  constructor(private titulo: String, private noticia: String) {
    this.id = Noticia.incrementId();
  }

  private static incrementId(): Number {
    Noticia.idCont++;
    return Noticia.idCont;
  }

  getId(): Number {
    return this.id;
  }

  getTitulo(): String {
    return this.titulo;
  }

  getNoticia(): String {
    return this.noticia;
  }

}
