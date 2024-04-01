import { Component, AfterContentInit } from '@angular/core';
import { ViewsService } from 'src/app/Servicios/views.service';
import { Views } from 'src/app/Models/views.model';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  views: Views[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];
  constructor(private viewsService: ViewsService) { }
  ngAfterContentInit(){
    this.viewsService.getViews().subscribe((data: Views[]) => {
      this.views = data;
    });
  }
  deleteView(id: number) {
  }

}
