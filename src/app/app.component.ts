import {Component, OnDestroy, OnInit} from '@angular/core';
import {Comment} from '../data/model';
import {ProfileService} from '../data/services/profile.service';
import {UserService} from '../data/services/user.service';
import {Observable, Subject} from 'rxjs/index';
import {take, takeUntil} from 'rxjs/operators';
import {Follow, Like, LoadUser} from './shared/actions/client.actions';
import {Store} from '@ngrx/store';
import {AddComment} from './shared/actions/profile.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    data$: Observable<any>;

    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private userService: UserService,
                private profileService: ProfileService,
                private store: Store<any>) {
    }

    ngOnInit() {
        this.store.dispatch(new LoadUser());
        this.data$ = this.store.pipe(
            takeUntil(this.destroy$)
        );
    }

    updateFollow(value: boolean) {
        this.store.dispatch(new Follow(value));
    }

    updateLike(value: boolean) {
        this.store.dispatch(new Like(value));
    }

    addComment(value: string) {
        this.data$.pipe(
            take(1)
        ).subscribe((data: any) => {
            const comment = {
                name: data.user.person.name,
                surname: data.user.person.surname,
                date: new Date().getTime(),
                text: value
            } as Comment;

            this.store.dispatch(new AddComment(comment));
        });
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
