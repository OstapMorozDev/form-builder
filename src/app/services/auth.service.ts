import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }



  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/auth/login`;
    return this.http.post<User>(url, {email, password});
  }

}
