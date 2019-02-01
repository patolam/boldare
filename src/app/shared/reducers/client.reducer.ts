import {UserActions, UserActionTypes} from '../actions/client.actions';
import {Person, User} from '../../../shared/data/model';

export const initialState: User = {
    followed: false,
    liked: false,
    person: {} as Person
}

export function userReducer(state = initialState, action: UserActions): User {
    switch (action.type) {
        case UserActionTypes.LoadUserSuccess:
            return {
                ...action.payload
            }
        case UserActionTypes.FollowSuccess:
            return {
                ...state,
                followed: action.payload.followed
            }
        case UserActionTypes.LikeSuccess:
            return {
                ...state,
                liked: action.payload.liked
            }
        default:
            return {
                ...state
            }
    }
}
