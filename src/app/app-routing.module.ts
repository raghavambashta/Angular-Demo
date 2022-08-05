import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { EmplistComponent } from './emplist/emplist.component';
import { MovieaddComponent } from './movieadd/movieadd.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'firstcomponent', component:FirstcomponentComponent},
  {path:'emplist', component: EmplistComponent},
  {path: 'movieadd', component: MovieaddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
