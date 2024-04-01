import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { RegisterComponent } from './Views/register/register.component';
import { HomeComponent } from './Views/home/home.component';
import { WelcomeComponent } from './Views/welcome/welcome.component';
import { IndexComponent as IndexUsers } from './Views/Users/index/index.component';
import { UpdateComponent as UpdateUser } from './Views/Users/update/update.component';
import { CreateComponent as CreateRol } from './Views/Rols/create/create.component';
import { IndexComponent as IndexRols } from './Views/Rols/index/index.component';
import { UpdateComponent as UpdateRol } from './Views/Rols/update/update.component';
import { IndexComponent as IndexVistas } from './Views/Vistas/index/index.component';
import { UpdateComponent as UpdateVista } from './Views/Vistas/update/update.component';
import { CreateComponent as CreateVista } from './Views/Vistas/create/create.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  //Rutas Usuario
  { path: 'users', component: IndexUsers},
  { path: 'users/update/:id', component: UpdateUser},
  //Rutas Rol
  { path: 'rols', component: IndexRols},
  { path: 'rols/update/:id', component: UpdateRol},
  { path: 'rols/create', component: CreateRol},
  //Rutas Vista
  { path: 'vistas', component: IndexVistas},
  { path: 'vistas/update/:id', component: UpdateVista},
  { path: 'vistas/create', component: CreateVista},
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
