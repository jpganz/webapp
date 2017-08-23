import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { AccountService } from '../../helpers/account/service/account.service';
import { SessionAuthService } from '../../helpers/sessionAuth/sessionAuth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
  providers: [AccountService, SessionAuthService]
})
export class Register {

  public form: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;

  public submitted: boolean = false;

  constructor(fb: FormBuilder, private _auth: AccountService, private _session: SessionAuthService,
              private _router: Router) {

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this._auth.postRegister(this.name.value, this.email.value, this.password.value).subscribe(res => {
        if (res.status === 201) {
          this._session.putToken(this.password.value);
          this._router.navigate(['/pages/dashboard']);
        }
      });
    }
  }
}
