import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/Home/Home.component';
import { VagaComponent } from './vaga/Vaga/Vaga.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vaga', component: VagaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
