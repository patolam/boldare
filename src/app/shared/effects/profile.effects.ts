import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {exhaustMap, map} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {ProfileService} from '../../../shared/data/services/profile.service';
import {AddComment, AddCommentSuccess, LoadProfileSuccess, ProfileActionTypes} from '../actions/profile.actions';
import {Comment} from '../../../shared/data/model';

@Injectable()
export class ProfileEffects {

    constructor(private http: HttpClient,
                private profileService: ProfileService,
                private actions$: Actions) {
    }

    @Effect()
    loadProfile$: Observable<Action> = this.actions$.pipe(
        ofType(ProfileActionTypes.LoadProfile),
        exhaustMap(data =>
            this.profileService.getProfile().pipe(
                map(data => new LoadProfileSuccess(data))
            )
        )
    )

    @Effect()
    addComment$: Observable<Action> = this.actions$.pipe(
        ofType(ProfileActionTypes.AddComment),
        exhaustMap((data: AddComment) =>
            this.profileService.addComment(data.data).pipe(
                map((comments: Comment[]) => new AddCommentSuccess(comments))
            )
        )
    )

}
