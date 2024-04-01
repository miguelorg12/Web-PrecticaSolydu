import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Servicios/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  hide = true;
  constructor(private userService: UserService, private router: Router) { }
  registerform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
  });

  register() {
    if (this.registerform.valid) {
      const { name, email, password } = this.registerform.value;
      this.userService.register({ name: name!, email: email!, password: password! }).subscribe({
        next: (response: any) => {
          console.log(response);
            alert('Usuario creado correctamente');
            this.router.navigate(['/login']);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
        }
      });
    }
  }
}
