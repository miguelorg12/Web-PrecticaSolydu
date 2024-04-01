import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';
import { RolView } from '../Models/rol-view.model';
@Injectable({
  providedIn: 'root'
})
export class RolesViewsService {

  constructor(private http: HttpClient, private cookie:CookieService) { }
  private token = this.cookie.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  getRolesViews(id:number, viewIds:number[]): Observable<RolView[]> {
    return this.http.put<RolView[]>(`${environment.api_url}${environment.rolviewsRoutes.Roles}/${id}`, {viewIds:viewIds}, { headers: this.headers });
  }
  getRoleView(id:number): Observable<RolView[]> {
    return this.http.get<RolView[]>(`${environment.api_url}${environment.rolviewsRoutes.Views}/${id}`, { headers: this.headers });
  }
}
