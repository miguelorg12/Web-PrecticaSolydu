import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';
import { Rol } from '../Models/rol.model';
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient, private cookie: CookieService) { }
  private token = this.cookie.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
  getRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${environment.api_url}${environment.rolesRoutes}`, { headers: this.headers });
  }
  getRole(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${environment.api_url}${environment.rolesRoutes}`, { headers: this.headers });
  }
  createRole(role: Rol): Observable<Rol> {
    return this.http.post<Rol>(`${environment.api_url}${environment.rolesRoutes}`, role, { headers: this.headers });
  }
  updateRole(id: number, role: Rol): Observable<Rol> {
    return this.http.put<Rol>(`${environment.api_url}${environment.rolesRoutes}/${id}`, role, { headers: this.headers });
  }
}
