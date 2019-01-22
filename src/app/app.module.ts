import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppProfileComponent} from './app-profile/app-profile.component';
import {HttpClientModule} from '@angular/common/http';
import {AgoPipe} from './pipes/ago.pipe';
import {StoreModule} from '@ngrx/store';
import {userReducer} from './shared/reducers/client.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './shared/effects/client.effects';
import {profileReducer} from './shared/reducers/profile.reducer';
import {ProfileEffects} from './shared/effects/profile.effects';

@NgModule({
    declarations: [
        AppComponent,
        AppProfileComponent,
        AgoPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({
            user: userReducer,
            profile: profileReducer
        }),
        EffectsModule.forRoot([
            UserEffects,
            ProfileEffects
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
