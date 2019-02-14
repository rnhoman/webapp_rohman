import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/Auth.service';
AuthService

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // if (localStorage.getItem('currentUser')) {
        //     return true;
        // }
        if (!this.authService.tokenExp()) {
            return true;
        }
        this.router.navigate(['/auth/login'], {
            queryParams: {
                returnUrl: state.url
            }
        });
    }
}