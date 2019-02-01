import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {authReducer} from './shared/reducers/auth.reducer';
import {AuthEffects} from './shared/effects/auth.effects';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        StoreModule.forFeature('auth', {
            auth: authReducer,
        }),
        EffectsModule.forFeature([
            AuthEffects
        ])
    ]
})
export class AuthModule {
}
