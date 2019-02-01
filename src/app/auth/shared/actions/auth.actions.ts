import {Action} from '@ngrx/store';
import {Auth} from '../../../../shared/data/model';

export enum AuthActionTypes {
    Login = '[Auth] Login',
    LoginSuccess = '[Auth] Login Success',
    LoginError = '[Auth] Login Error'
}

export class Login implements Action {
    readonly type = AuthActionTypes.Login;

    constructor(public payload: { email: string; password: string }) {
    }
}

export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LoginSuccess;

    constructor(public payload: Auth) {
    }
}

export class LoginError implements Action {
    readonly type = AuthActionTypes.LoginError;
}

export type AuthActions = Login
    | LoginSuccess
    | LoginError;
