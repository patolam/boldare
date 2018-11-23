import {Component, OnDestroy, OnInit} from '@angular/core';
import {Comment, Profile, User} from '../data/model';
import {ProfileService} from '../data/services/profile.service';
import {UserService} from '../data/services/user.service';
import {Subject} from 'rxjs/index';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    profileData: Profile;

    userData: User;

    private destroy: Subject<boolean> = new Subject<boolean>();

    constructor(private userService: UserService,
                private profileService: ProfileService) {
    }

    ngOnInit() {
        this.userService.getUser()
            .pipe(takeUntil(this.destroy))
            .subscribe(data => {
                this.userData = data;
                this.reloadProfile();
            });
    }

    updateFollow(value: boolean) {
        this.userService.updateFollow(value)
            .pipe(takeUntil(this.destroy))
            .subscribe(data => {
                this.userData = data;
                this.reloadProfile();
            });
    }

    updateLike(value: boolean) {
        this.userService.updateLike(value)
            .pipe(takeUntil(this.destroy))
            .subscribe(data => {
                this.userData = data;
                this.reloadProfile();
            });
    }

    addComment(value: string) {
        const comment = {
            name: this.userData.person.name,
            surname: this.userData.person.surname,
            date: new Date().getTime(),
            text: value
        } as Comment;

        this.profileService.addComment(comment)
            .pipe(takeUntil(this.destroy))
            .subscribe(data => {
                this.profileData.comments = data;
            });
    }

    ngOnDestroy() {
        this.destroy.next(true);
        this.destroy.unsubscribe();
    }

    private reloadProfile() {
        this.profileService.getProfile()
            .pipe(takeUntil(this.destroy))
            .subscribe(data => {
                this.profileData = data;
            });
    }
}
