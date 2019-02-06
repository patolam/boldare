import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of, pipe} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {AuthService} from '../services/auth.service';
import {AuthActionTypes, Login, LoginError, LoginSuccess} from '../actions/auth.actions';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {

    constructor(private http: HttpClient,
                private authService: AuthService,
                private actions$: Actions,
                private router: Router) {
    }

    @Effect()
    $login: Observable<Action> = this.actions$.pipe(
        ofType(AuthActionTypes.Login),
        map((action: Login) => action.payload),
        exhaustMap(payload =>
            this.authService.login(
                payload.email,
                payload.password
            ).pipe(
                map(data => new LoginSuccess(data)),
                catchError(() => of(new LoginError()))
            )
        )
    );

    @Effect({dispatch: false})
    $loginSuccess = this.actions$.pipe(
        ofType(AuthActionTypes.LoginSuccess),
        pipe(
            tap((action: LoginSuccess) => {
                this.authService.setToken(action.payload.token);
                this.router.navigate(['./profile']);
            })
        )
    );

    @Effect({dispatch: false})
    $logout = this.actions$.pipe(
        ofType(AuthActionTypes.Logout),
        tap(() => {
            this.authService.logout();
            this.router.navigate(['./auth']);
        })
    );

}
