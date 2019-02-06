import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CanActivateProfile} from './shared/guards/can-activate-profile';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule',
        data: {animation: 'auth'}
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule',
        canActivate: [CanActivateProfile],
        data: {animation: 'profile'}
    },
    {
        path: '',
        redirectTo: '/profile',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
