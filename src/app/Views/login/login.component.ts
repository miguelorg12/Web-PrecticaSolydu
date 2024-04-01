import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Servicios/user.service';
import { UserLogin } from 'src/app/Models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  backendErrors:string = '';
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private userService: UserService, private cookie:CookieService, private router:Router) {}
  login() {
    if(this.loginform.valid){
      const { email, password } = this.loginform.value;
      this.userService.login({ email: email!, password: password! }).subscribe({
        next: (response: any) => {
          console.log(response);
          this.cookie.set('token', response.token, 1/24);
          alert('Usuario logueado correctamente');
          this.router.navigate(['/home']);
        },
        error: (err: HttpErrorResponse) => {
          if(err.status == 400){
            this.backendErrors = 'Correo o contraseña incorrectos';
          }
        }
      });
    }
    
  }
}

