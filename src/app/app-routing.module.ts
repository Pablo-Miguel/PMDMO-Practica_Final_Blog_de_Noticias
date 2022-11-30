import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogNoticiasComponent } from './componentes/blog-noticias/blog-noticias.component';
import { LogInComponent } from './componentes/log-in/log-in.component';
import { SesionGuard } from './guard/sesion.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LogInComponent},
  {path: 'blognoticias', component: BlogNoticiasComponent, canActivate: [SesionGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
