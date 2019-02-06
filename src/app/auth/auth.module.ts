import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './shared/effects/auth.effects';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        // StoreModule.forFeature('auth', {
        //     auth: authReducer,
        // }),
        // EffectsModule.forFeature([
        //     AuthEffects
        // ])
        MaterialModule
    ]
})
export class AuthModule {
}
