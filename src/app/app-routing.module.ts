import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogNoticiasComponent } from './componentes/blog-noticias/blog-noticias.component';
import { DetalleNoticiaComponent } from './componentes/detalle-noticia/detalle-noticia.component';
import { LogInComponent } from './componentes/log-in/log-in.component';
import { SesionGuard } from './guard/sesion.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LogInComponent},
  {path: 'blog_noticias', component: BlogNoticiasComponent, canActivate: [SesionGuard]},
  {path: 'detalle_noticia/:id', component: DetalleNoticiaComponent, canActivate: [SesionGuard]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
