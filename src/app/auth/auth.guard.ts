import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
    return this.authService.currentUserValue.pipe(
      take(1),
      map(user => {
        if(user) {
          if(route.data.admin && route.data.admin && user.isAdmin === 'false') {
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