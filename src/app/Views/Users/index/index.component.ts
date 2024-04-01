import { Component, AfterContentInit } from '@angular/core';
import { UserService } from 'src/app/Servicios/user.service';
import { RolesService } from 'src/app/Servicios/roles.service';
import { Rol } from 'src/app/Models/rol.model';
import { User } from 'src/app/Models/user.model';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterContentInit {
  users: User[] = [];
  roles: Rol[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'rol', 'actions'];

  constructor(private userService: UserService, private rolesService: RolesService) { }
  
  
  ngAfterContentInit() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
    this.rolesService.getRoles().subscribe((data: Rol[]) => {
      this.roles = data;
    });
  }
  deleteUser(id: number) {
    // implementar la lógica de eliminación aquí
  }
}
