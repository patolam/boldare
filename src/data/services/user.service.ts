import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {environment} from '../../environments/environment';
import {User} from '../model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<User> {
    return this.http.get(environment.apiUrl + 'user');
  }

  updateFollow(value: boolean): Observable<User> {
    const headers = new HttpHeaders({
      follow: value.toString()
    });

    return this.http.put(environment.apiUrl + 'user/follow', {}, {headers: headers});
  }

  updateLike(value: boolean): Observable<User> {
    const headers = new HttpHeaders({
      like: value.toString()
    });

    return this.http.put(environment.apiUrl + 'user/like', {}, {headers: headers});
  }
}
