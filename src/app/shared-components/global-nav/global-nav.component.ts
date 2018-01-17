import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthenticationResponse } from '../../models/authentication-response';
import { AuthService } from '../../shared-services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent implements OnInit {
  public user: AuthenticationResponse = null;
  @Output() onToggleNav: EventEmitter<any> = new EventEmitter<any>();
  constructor(private _breakpointObserver: BreakpointObserver, private _authService: AuthService, private _router: Router) {
  }

  ngOnInit() {
    this.user = this._authService.isAuthenticated();
  }
  toggleNav(): void {
    this.onToggleNav.emit(true);
  }
  login(): Promise<AuthenticationResponse> {
    return new Promise( (resolve, reject) => {
      this._authService.login(this._router.url);
      resolve();
    });
  }
  logout(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._authService.logout();
      this.user = this._authService.isAuthenticated();
      this._router.navigate(['/home']);
      resolve();
    });
  }
}
