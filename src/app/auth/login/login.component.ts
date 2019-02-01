import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Auth} from '../../../shared/data/model';
import {Login} from '../shared/actions/auth.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email: string = 'marcin.patola@boldare.com';

    password: string = 'abcd';

    constructor(private store: Store<Auth>) {
    }

    ngOnInit() {
        this.login(this.email, this.password);
    }

    login(email: string, password: string) {
        this.store.dispatch(new Login({email, password}));
    }

}
