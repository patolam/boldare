import {Action} from '@ngrx/store';
import {User} from '../../../data/model';

export enum UserActionTypes {
    LoadUser = '[User] Load user',
    LoadUserSuccess = '[User] Load user Success',

    Follow = '[User] Follow',
    FollowSuccess = '[User] Follow Success',

    Like = '[User] Like',
    LikeSuccess = '[User] Like Success'
}

export class LoadUser implements Action {
    readonly type = UserActionTypes.LoadUser;
}

export class LoadUserSuccess implements Action {
    readonly type = UserActionTypes.LoadUserSuccess;

    constructor(public payload: User) {
    }
}

export class Follow implements Action {
    readonly type = UserActionTypes.Follow;

    constructor(public followed: boolean) {
    }
}

export class FollowSuccess implements Action {
    readonly type = UserActionTypes.FollowSuccess;

    constructor(public payload: User) {
    }
}

export class Like implements Action {
    readonly type = UserActionTypes.Like;

    constructor(public liked: boolean) {
    }
}

export class LikeSuccess implements Action {
    readonly type = UserActionTypes.LikeSuccess;

    constructor(public payload: User) {
    }
}

export type UserActions =
    LoadUser
    | LoadUserSuccess
    | Follow
    | FollowSuccess
    | Like
    | LikeSuccess;
