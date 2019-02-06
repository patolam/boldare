import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('auth => *', [
            style({position: 'relative'}),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({left: '100%'})
            ]),
            query(':leave', animateChild(), {optional: true}),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({left: '-100%'}))
                ], {optional: true}),
                query(':enter', [
                    animate('300ms ease-out', style({left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        slideInAnimation
    ]
})
export class AppComponent {

    constructor() {
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
