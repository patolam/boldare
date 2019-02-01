import {Person, Profile, Stats, Comment} from '../../../shared/data/model';
import {ProfileActions, ProfileActionTypes} from '../actions/profile.actions';

export const initialState: Profile = {
    person: {} as Person,
    stats: {} as Stats,
    comments: [] as Comment[]
}

export function profileReducer(state = initialState, action: ProfileActions): Profile {
    switch (action.type) {
        case ProfileActionTypes.LoadProfileSuccess:
            return {
                ...action.payload
            }
        case ProfileActionTypes.AddCommentSuccess:
            return {
                ...state,
                comments: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
