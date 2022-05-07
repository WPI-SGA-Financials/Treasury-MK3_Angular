import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from '../types/path.enum';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private loggedIn = true;

    constructor(private router: Router) {}

    get isLoggedIn(): boolean {
        return this.loggedIn;
    }

    login(): void {
        this.loggedIn = true;
        this.router.navigate(['/', Path.ORGANIZATIONS]);
    }

    logout(): void {
        this.loggedIn = false;
    }
}
