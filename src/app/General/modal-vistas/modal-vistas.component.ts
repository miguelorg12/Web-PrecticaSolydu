import { Component, Inject } from '@angular/core';
import { RolesViewsService } from 'src/app/Servicios/roles-views.service';
import { ViewsService } from 'src/app/Servicios/views.service';
import { Views } from 'src/app/Models/views.model';
import { RolView } from 'src/app/Models/rol-view.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-vistas',
  templateUrl: './modal-vistas.component.html',
  styleUrls: ['./modal-vistas.component.css']
})
export class ModalVistasComponent {
  roles_views:RolView[] = [];
  views:Views[] = [];
  selectedViewIds:number[] = [];
  constructor(private rolesViewsService: RolesViewsService, @Inject(MAT_DIALOG_DATA) public data: any,
  private viewService:ViewsService, 
  public dialogref:MatDialogRef<ModalVistasComponent>) { }
  ngOnInit(){
    this.rolesViewsService.getRoleView(this.data.id).subscribe((data: RolView[]) => {
      this.roles_views = data;
      this.selectedViewIds = this.roles_views.map(role_view => role_view.id);
      console.log(this.roles_views);
    });
    this.viewService.getViews().subscribe((data: Views[]) => {
      this.views = data;
    });
  }
  isViewInRole(viewId: number): boolean {
    return this.roles_views.some(role_view => role_view.id === viewId);
  } 
  updateRoleView() {
    console.log(this.selectedViewIds);
    this.rolesViewsService.getRolesViews(this.data.id, this.selectedViewIds).subscribe({
      next: (response: any) => {
        console.log(response);
        alert('Vistas-Rol actualizadas correctamente');
        this.dialogref.close();
      }

    });
  }
  cambioVistas(viewId: number, isChecked: boolean) {
    if (isChecked) {
      this.selectedViewIds.push(viewId);
    } else {
      this.selectedViewIds = this.selectedViewIds.filter(id => id !== viewId);
    }
  }
}
