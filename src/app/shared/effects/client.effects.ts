import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Follow, FollowSuccess, Like, LikeSuccess, LoadUserSuccess, UserActionTypes} from '../actions/client.actions';
import {exhaustMap, map} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {UserService} from '../services/user.service';
import {LoadProfile} from '../actions/profile.actions';

@Injectable()
export class UserEffects {

    constructor(private http: HttpClient,
                private userService: UserService,
                private actions$: Actions) {
    }

    @Effect()
    loadUser$: Observable<Action> = this.actions$.pipe(
        ofType(UserActionTypes.LoadUser),
        exhaustMap(data =>
            this.userService.getUser().pipe(
                map(data => new LoadUserSuccess(data))
            )
        )
    )

    @Effect()
    reloadProfile: Observable<Action> = this.actions$.pipe(
        ofType(
            UserActionTypes.LoadUserSuccess,
            UserActionTypes.FollowSuccess,
            UserActionTypes.LikeSuccess
        ),
        map(() => new LoadProfile())
    )

    @Effect()
    follow$: Observable<Action> = this.actions$.pipe(
        ofType(UserActionTypes.Follow),
        exhaustMap((data: Follow) =>
            this.userService.updateFollow(data.followed).pipe(
                map(user => (new FollowSuccess(user)))
            )
        )
    );

    @Effect()
    like$: Observable<Action> = this.actions$.pipe(
        ofType(UserActionTypes.Like),
        exhaustMap((data: Like) =>
            this.userService.updateLike(data.liked).pipe(
                map(user => new LikeSuccess(user))
            )
        )
    );

}
