import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Profile, User} from '../../../shared/data/model';

const ENTER_KEY = 'Enter';

@Component({
    selector: 'app-profile-details',
    templateUrl: './app-profile-details.component.html',
    styleUrls: ['./app-profile-details.component.scss']
})
export class AppProfileDetailsComponent {
    @Input()
    data: Profile;

    @Input()
    user: User;

    @Output()
    private followChanged: EventEmitter<boolean> = new EventEmitter();

    @Output()
    private likeChanged: EventEmitter<boolean> = new EventEmitter();

    @Output()
    private comment: EventEmitter<string> = new EventEmitter();

    commentsHidden = false;

    shareVisible = false;

    shareUrl: string;

    constructor() {
        this.shareUrl = window.location.href;
    }

    updateFollow() {
        this.followChanged.emit(!this.user.followed);
    }

    updateLike() {
        this.likeChanged.emit(!this.user.liked);
    }

    toggleHidden() {
        this.commentsHidden = !this.commentsHidden;
    }

    addComment($event: KeyboardEvent, add: HTMLInputElement) {
        if ($event.key === ENTER_KEY && add.value && add.value !== '') {
            this.comment.emit(add.value);
            add.value = null;
        }
    }
}
