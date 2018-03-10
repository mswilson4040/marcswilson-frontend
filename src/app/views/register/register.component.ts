import { Component, OnInit } from '@angular/core';
import { User } from '../../models/admin/user';
import { FormControl, Validators } from '@angular/forms';
import { UserManagerService } from '../../shared-services/user-manager.service';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { UserRoles } from '../../enums/user-roles.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserManagerService]
})
export class RegisterComponent implements OnInit {
  public user: User = new User();
  public password: string = null;
  public confirmPassword: string = null;
  public nameCtrl: FormControl;
  public emailCtrl: FormControl;
  public passwordCtrl: FormControl;
  public confirmPasswordCtrl: FormControl;
  constructor(private _userManagerService: UserManagerService, private _router: Router) {
    this.nameCtrl = new FormControl('', [
      Validators.required
    ]);
    this.emailCtrl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.passwordCtrl = new FormControl('', [
      Validators.required,
      Validators.pattern(this.confirmPassword)
    ]);
    this.confirmPasswordCtrl = new FormControl('', [
      Validators.required
    ]);
  }

  ngOnInit() {
  }
  async register() {
    if (this.password !== this.confirmPassword) {
      this.confirmPasswordCtrl.setErrors(Validators.pattern(this.password));
      this.passwordCtrl.setErrors(Validators.pattern(this.confirmPassword));
    } else {
      this.user.passwordHash = CryptoJS.AES.encrypt(this.password, environment.clientKey).toString();
      this.user.role = UserRoles.Admin;
      this.user.created = new Date();
      const user = await this._userManagerService.createUser(this.user);
      localStorage.setItem(environment.LOCAL_STORAGE.userLookupKey, user.stringify());
      this._router.navigate([`/login`]);
    }
  }
}
