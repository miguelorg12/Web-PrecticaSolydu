import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { RolView } from '../Models/rol-view.model';
@Injectable({
  providedIn: 'root'
})
export class RolesViewsService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  getRolesViews(id:number): Observable<RolView[]> {
    return this.http.put<RolView[]>(`${environment.api_url}${environment.rolviewsRoutes.Roles}`, {id}, { headers: this.headers });
  }
  getRoleView(): Observable<RolView[]> {
    return this.http.get<RolView[]>(`${environment.api_url}${environment.rolviewsRoutes.Views}`, { headers: this.headers });
  }
}
