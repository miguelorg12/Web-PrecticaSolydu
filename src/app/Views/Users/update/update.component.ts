import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/Servicios/user.service';
import { RolesService } from 'src/app/Servicios/roles.service';
import { UserUpdate } from 'src/app/Models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Rol } from 'src/app/Models/rol.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  roles: Rol[] = [];
  user: UserUpdate = {} as UserUpdate;
  user_id: number = 0;
  updateform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/)]),
    role_id: new FormControl(0, Validators.required)
  });


  constructor(
    private userService: UserService,
    private rolesService: RolesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user_id = this.route.snapshot.params['id'];


    this.rolesService.getRoles().subscribe((data: Rol[]) => {
      this.roles = data;
    });

    this.userService.getUser(this.user_id).subscribe((data: UserUpdate) => {
      this.user = data;
      this.updateform.patchValue({
        name: this.user.name,
        role_id: this.user.role_id
      });
    });
  }

  update() {
    if (this.updateform.valid) {
      const { name, role_id } = this.updateform.value;
        this.userService.updateUser(this.user_id, {name : name!, role_id : role_id!}).subscribe({
        next: (response: any) => {
          console.log(response);
          alert('Usuario actualizado correctamente');
          this.router.navigate(['/users']);
        }
        });
      
    }
  }
}