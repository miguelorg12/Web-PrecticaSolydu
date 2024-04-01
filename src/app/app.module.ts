import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './General/toolbar/toolbar.component';
import { LoginComponent } from './Views/login/login.component';
import { RegisterComponent } from './Views/register/register.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SideNavComponent } from './General/side-nav/side-nav.component';
import { HomeComponent } from './Views/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './Views/welcome/welcome.component';
import { RouterLink } from '@angular/router';
import { IndexComponent } from './Views/Users/index/index.component';
import { UpdateComponent } from './Views/Users/update/update.component';
import { CreateComponent } from './Views/Rols/create/create.component';
import { IndexComponent as IndexRols } from './Views/Rols/index/index.component';
import { UpdateComponent as UpdateRol } from './Views/Rols/update/update.component';
import { IndexComponent as IndexVistas } from './Views/Vistas/index/index.component';
import { UpdateComponent as UpdateVista } from './Views/Vistas/update/update.component';
import { CreateComponent as CreateVista } from './Views/Vistas/create/create.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    RegisterComponent,
    SideNavComponent,
    HomeComponent,
    WelcomeComponent,
    IndexComponent,
    UpdateComponent,
    CreateComponent,
    IndexRols,
    UpdateRol,
    IndexVistas,
    UpdateVista,
    CreateVista
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
