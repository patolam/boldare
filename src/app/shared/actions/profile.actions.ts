import {Action} from '@ngrx/store';
import {Profile, Comment} from '../../../shared/data/model';

export enum ProfileActionTypes {
    LoadProfile = '[Profile] Load profile',
    LoadProfileSuccess = '[Profile] Load profile Success',
    AddComment = '[Profile] Add comment',
    AddCommentSuccess = '[Profile] Add comment Success'
}

export class LoadProfile implements Action {
    readonly type = ProfileActionTypes.LoadProfile;
}

export class LoadProfileSuccess implements Action {
    readonly type = ProfileActionTypes.LoadProfileSuccess;

    constructor(public payload: Profile) {
    }
}

export class AddComment implements Action {
    readonly type = ProfileActionTypes.AddComment;

    constructor(public data: Comment) {
    }
}

export class AddCommentSuccess implements Action {
    readonly type = ProfileActionTypes.AddCommentSuccess;

    constructor(public payload: Comment[]) {
    }
}

export type ProfileActions =
    LoadProfile
    | LoadProfileSuccess
    | AddComment
    | AddCommentSuccess;
