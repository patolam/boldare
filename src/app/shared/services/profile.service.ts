import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Comment, Profile} from '../data/model';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getProfile(): Observable<Profile> {
    return this.http.get(environment.apiUrl + 'profile');
  }

  addComment(data: Comment): Observable<Comment[]> {
    return this.http.post(environment.apiUrl + 'profile/comment', data) as Observable<Comment[]>;
  }
}
