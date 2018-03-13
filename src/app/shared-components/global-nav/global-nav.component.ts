import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../../shared-services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { User } from '../../models/admin/user';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent implements OnInit {
  public user: User = null;
  public siteName: string = null;
  @Output() onToggleNav: EventEmitter<any> = new EventEmitter<any>();
  constructor(private _breakpointObserver: BreakpointObserver, private _authService: AuthService, private _router: Router,
              private _titleService: Title) {
    this._authService.onAuthentication.subscribe( _user => {
      this.user = _user;
    });
    this._router.events.subscribe( _event => {
      if (_event instanceof NavigationEnd) {
        this.siteName = this._titleService.getTitle();
      }
    });
  }

  ngOnInit() {
    this.user = this._authService.isAuthenticated();
  }
  toggleNav(): void {
    this.onToggleNav.emit(true);
  }
  logout(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._authService.logout();
      this._router.navigate(['/home']);
      resolve();
    });
  }
}
