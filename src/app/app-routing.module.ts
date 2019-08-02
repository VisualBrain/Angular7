import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentDataComponent } from './present-data/present-data.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'presentData', component: PresentDataComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
