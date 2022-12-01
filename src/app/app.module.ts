import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstiloComponent } from './componentes/estilo/estilo.component';
import { LogInComponent } from './componentes/log-in/log-in.component';
import { BlogNoticiasComponent } from './componentes/blog-noticias/blog-noticias.component';
import { FormNoticiaComponent } from './componentes/blog-noticias/form-noticia/form-noticia.component';
import { NoticiaComponent } from './componentes/blog-noticias/noticia/noticia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DetalleNoticiaComponent } from './componentes/detalle-noticia/detalle-noticia.component';
import { UpperTextPipe } from './pipe/upper-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    LogInComponent,
    BlogNoticiasComponent,
    FormNoticiaComponent,
    NoticiaComponent,
    FooterComponent,
    DetalleNoticiaComponent,
    UpperTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
