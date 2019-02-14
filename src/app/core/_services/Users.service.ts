import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    // currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // jwtData = this.currentUser.token.split('.')[1];
    // decodeJwtJson = window.atob(this.jwtData);
    // decodeJwtData = JSON.parse(this.decodeJwtJson);

    // public nameAdmin = this.decodeJwtData.nameAdmin;
    // public company = this.decodeJwtData.companynameAdmin;
    // public level = this.decodeJwtData.levelnameAdmin;
    // public email = this.decodeJwtData.emailAdmin;
    // public phone = this.decodeJwtData.phoneAdmin;

}
