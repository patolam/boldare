import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Auth} from '../../../shared/data/model';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

export const TOKEN_NAME: string = 'token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(login: string, password: string): Observable<Auth> {
        return this.http.post(environment.apiUrl + 'auth/login', {
            'email': login,
            'password': password
        });
    }

    logout() {
        localStorage.removeItem(TOKEN_NAME);
    }

    getToken(): string {
        return localStorage.getItem(TOKEN_NAME);
    }

    setToken(token: string): void {
        localStorage.setItem(TOKEN_NAME, token);
    }

    isTokenExpired(): boolean {
        const token = this.getToken();

        if (!token) {
            return true;
        } else {
            const date = this.getTokenExpirationDate(token);

            if (date) {
                return new Date().valueOf() >= date.valueOf();
            }
        }
    }

    getTokenExpirationDate(token: string): Date {
        const decoded = jwt_decode(token);
        let date;

        if (decoded.exp) {
            date = new Date(0);
            date.setUTCSeconds(decoded.exp);
        }

        return date;
    }
}
