import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionAuthService } from '../../helpers/sessionAuth/sessionAuth.service';
import { Router } from '@angular/router';
import { AccountService } from '../../helpers/account/service/account.service';
import { OauthService } from '../../helpers/account/service/oauth.service';
import { DefaultModal } from './components/default-modal/default-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  providers: [SessionAuthService, AccountService, OauthService],
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  private tk: string = '';
  private rol: string = '';

  constructor(private _router: Router, fb: FormBuilder, private _session: SessionAuthService,
              private modalService: NgbModal, private _oauth: OauthService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
    this._session.validateSession();
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this._oauth.getToken(this.email.value, this.password.value).subscribe(response => {
        const res = response.json();
        this._session.putToken(res.access_token);
        this._router.navigate(['/pages/dashboard']);
      }, error => {
        this.email.reset('');
        this.password.reset('');
        const activeModal = this.modalService.open(DefaultModal, {
          size: 'sm',
          backdrop: 'static'
        });
        activeModal.componentInstance.modalHeader = 'Credenciales incorrectas';
        activeModal.componentInstance.valueDefault = 'El usuario / contraseña que ingresaste son incorrectos.';
      });
    }
  }
}
