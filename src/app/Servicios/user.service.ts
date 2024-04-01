import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { User, UserLogin, UserUpdate, UserRegister } from '../Models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private token = localStorage.getItem('token');
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
  
  login(user:UserLogin):Observable<UserLogin>{
    return this.http.post<UserLogin>(`${environment.api_url}${environment.userRoutes.login}`, user);
  }

  register(user:UserRegister):Observable<UserRegister>{
    return this.http.post<UserRegister>(`${environment.api_url}${environment.userRoutes.register}`,user);
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${environment.api_url}${environment.userRoutes.users}`, {headers: this.headers});
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(`${environment.api_url}${environment.userRoutes.users}/${id}`, {headers: this.headers});
  }

  updateUser(id:number, user:UserUpdate):Observable<UserUpdate>{
    return this.http.put<UserUpdate>(`${environment.api_url}${environment.userRoutes.users}/${id}`, user, {headers: this.headers});
  }

  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>(`${environment.api_url}${environment.userRoutes.users}/${id}`, {headers: this.headers});
  }


}
