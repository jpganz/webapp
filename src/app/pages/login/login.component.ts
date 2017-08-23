import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionAuthService } from '../../helpers/sessionAuth/sessionAuth.service';
import { Router } from '@angular/router';
import { AccountService } from '../../helpers/account/service/account.service';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  providers: [SessionAuthService, AccountService],
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  private tk: string = '';
  private rol: string = '';

  constructor(private _router: Router, fb: FormBuilder, private _session: SessionAuthService,
              private _auth: AccountService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
    let getToken = this._session.getToken();
    if (typeof getToken !== 'undefined' && getToken !== 'undefined' && getToken.length >= 4) {
      this.tk = JSON.parse(getToken);
      if (this.tk == null) {
        this._router.navigate(['/']);
      } else {
        this._router.navigate(['/pages/dashboard']);
      }
    } else {
      this._router.navigate(['/']);
    }
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {

      this._session.putToken(this.password.value);
      this._router.navigate(['/pages/dashboard']);

    }
  }
}
