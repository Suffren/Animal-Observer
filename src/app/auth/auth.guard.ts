import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, take, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../shared/interfaces/interfaces';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    let url: string = state.url;
    return this.checkLogin(url, route);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(route, state);
  }

  checkLogin(url: string, route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn.pipe(
      take(1),
      mergeMap( (isLoggedIn) => {
        if(isLoggedIn)
          return this.authService.currentUserValue;
        return of(false);
      }),
      map((user: User) => {
        if(user) {
          if(route.data.admin && route.data.admin && user.isAdmin === false) {
            this.router.navigate(['/home']);
            return false;
          }

          return true;
        }

        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
      })
    )
  }
}