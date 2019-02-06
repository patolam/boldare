import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {Auth} from '../data/model';
import {AuthService} from '../../auth/shared/services/auth.service';


@Injectable({
    providedIn: 'root'
})
export class CanActivateProfile implements CanActivate {

    constructor(private store: Store<Auth>,
                private authService: AuthService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isTokenExpired()) {
            this.redirect();
        } else {
            return true;
        }
    }

    redirect(): Observable<boolean> {
        this.router.navigate(['./auth/login']);
        return of(false);
    }
}
