import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RolesService } from 'src/app/Servicios/roles.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Rol } from 'src/app/Models/rol.model';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private rolesService: RolesService, private router: Router) { }
  createForm = new FormGroup({
    rol: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/)]),
  });
  create() {
    if (this.createForm.valid) {
      const { rol } = this.createForm.value;
      this.rolesService.createRole({ rol: rol! } as Rol).subscribe({
        next: (response: any) => {
          console.log(response);
          alert('Rol creado correctamente');
          this.router.navigate(['/rols']);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
        }
      });
    }
  }

}
