import { Component, AfterContentInit } from '@angular/core';
import { RolesService } from 'src/app/Servicios/roles.service';
import { Rol } from 'src/app/Models/rol.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalVistasComponent } from 'src/app/General/modal-vistas/modal-vistas.component';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterContentInit{
  roles: Rol[] = [];
  displayedColumns: string[] = ['id', 'rol', 'actions', 'vistas'];
  constructor(private rolesService: RolesService, 
    private dialog:MatDialog) { }
  ngAfterContentInit(){
    this.rolesService.getRoles().subscribe((data: Rol[]) => {
      this.roles = data;
    });
  }
  
  deleteRol(id: number) {

  }
  openDialog(id: number) {
    this.dialog.open(ModalVistasComponent, {
      data: { id: id }
    });
  }

}