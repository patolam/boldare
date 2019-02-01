import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import {AppProfileDetailsComponent} from './app-profile-details/app-profile-details.component';
import {AgoPipe} from './pipes/ago.pipe';
import {StoreModule} from '@ngrx/store';
import {userReducer} from '../shared/reducers/client.reducer';
import {profileReducer} from '../shared/reducers/profile.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from '../shared/effects/client.effects';
import {ProfileEffects} from '../shared/effects/profile.effects';

@NgModule({
    declarations: [
        ProfileComponent,
        AppProfileDetailsComponent,
        AgoPipe
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        StoreModule.forFeature('profile', {
            user: userReducer,
            profile: profileReducer
        }),
        EffectsModule.forFeature([
            UserEffects,
            ProfileEffects
        ])
    ]
})
export class ProfileModule {
}
