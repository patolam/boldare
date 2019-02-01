import {Person, Profile, Stats, Comment, Auth} from '../../../../shared/data/model';
import {ProfileActions, ProfileActionTypes} from '../../../shared/actions/profile.actions';
import {AuthActions, AuthActionTypes} from '../actions/auth.actions';

export const initialState: Auth = {};

export function authReducer(state = initialState, action: AuthActions): Auth {
    switch (action.type) {
        case AuthActionTypes.LoginSuccess:
            return {
                ...action.payload
            }
        default:
            return {
                ...state
            }
    }
}
