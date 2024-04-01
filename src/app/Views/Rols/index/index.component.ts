import { Component, AfterContentInit } from '@angular/core';
import { RolesService } from 'src/app/Servicios/roles.service';
import { Rol } from 'src/app/Models/rol.model';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterContentInit{
  roles: Rol[] = [];
  displayedColumns: string[] = ['id', 'rol', 'actions'];
  constructor(private rolesService: RolesService) { }
  ngAfterContentInit(){
    this.rolesService.getRoles().subscribe((data: Rol[]) => {
      this.roles = data;
    });
  }
  
  deleteRol(id: number) {
  }

}
