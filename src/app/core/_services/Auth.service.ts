import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { decode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL : 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(`http://localhost:3000/auth/login`, { username, password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  setToken(token: string): void {
    localStorage.setItem('currentUser', token);
  }

  getToken(): string {
    return localStorage.getItem('currentUser');
  }

  tokenExp(token?: string): Boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExp(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  getTokenExp(token: string): Date {
    const decoded = jwt_decode(token);
    if(decoded.exp === undefined ) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }
}
