import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';
import { Views } from '../Models/views.model';
@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  constructor(private http: HttpClient, private cookie:CookieService) { }

  private token = this.cookie.get('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  getViews(): Observable<Views[]> {
    return this.http.get<Views[]>(`${environment.api_url}${environment.viewsRoutes}`, { headers: this.headers });
  }

  getView(): Observable<Views[]> {
    return this.http.get<Views[]>(`${environment.api_url}${environment.viewsRoutes}`, { headers: this.headers });
  }

  createView(view: Views): Observable<Views> {
    return this.http.post<Views>(`${environment.api_url}${environment.viewsRoutes}`, view, { headers: this.headers });
  }

  updateView(id: number, view: Views): Observable<Views> {
    return this.http.put<Views>(`${environment.api_url}${environment.viewsRoutes}/${id}`, view, { headers: this.headers });
  }
}
