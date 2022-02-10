import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "http://localhost:8000";

  constructor(private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) { }

  getToken() {
    return localStorage.getItem('authData');
  }

  login(body: { email: string, password: string }) {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, body).pipe(
      map(res => {
        return {
          ...res,
          ...this.jwtHelperService.decodeToken(res.accessToken)
        }
      })
    );
  }

  signUp(body: { email: string, password: string }) {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, body);
  }
}
