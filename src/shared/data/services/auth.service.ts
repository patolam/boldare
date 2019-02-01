import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Auth} from '../model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

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
}
