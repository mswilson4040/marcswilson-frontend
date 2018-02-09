import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../shared-services/auth.service';
import { UserRoles } from '../enums/user-roles.enum';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const user = this._authService.isAuthenticated();
    if (user && user.role === UserRoles.Admin) {
      return true;
    }
    this._router.navigate(['login'])
    return false;

  }
}
