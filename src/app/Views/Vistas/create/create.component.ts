import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Views } from 'src/app/Models/views.model';
import { ViewsService } from 'src/app/Servicios/views.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private viewsService: ViewsService, private router: Router) { }
  createForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/)]),
  });
  create() {
    if (this.createForm.valid) {
      const { name } = this.createForm.value;
      this.viewsService.createView({ name: name! } as Views).subscribe({
        next: (response: any) => {
          console.log(response);
          alert('Vista creada correctamente');
          this.router.navigate(['/vistas']);
        },
        error: (err: any) => {
          console.log(err.error);
        }
      });
    }
  }

}
