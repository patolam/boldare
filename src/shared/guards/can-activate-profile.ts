import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {Auth} from '../data/model';
import {catchError, map, take} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CanActivateProfile implements CanActivate {

    constructor(private store: Store<Auth>,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.store.pipe(
            select('auth'),
            map(e => {
                if (e) {
                    return true;
                }
            }),
            catchError(err => this.redirect())
        )
    }

    redirect(): Observable<boolean> {
        this.router.navigate(['./auth/login']);
        return of(false);
    }
}
