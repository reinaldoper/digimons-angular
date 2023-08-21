import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarregandoComponent } from './pages/carregando/carregando.component';
import { RenderizaComponent } from './components/renderiza/renderiza.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent, pathMatch: 'full', 
  },
  {
    path: 'loading',
    component: CarregandoComponent,
  },
  {
    path:'renderiza',
    component: RenderizaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
