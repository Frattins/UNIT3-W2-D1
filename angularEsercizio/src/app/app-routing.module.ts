import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',//redireziona l'utente
    pathMatch: 'full'//per far si che il path vuoto venga riconosciuto correttamente
  },
  {
    path:'home',
    component: HomeComponent,
    title:'Home'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
