import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieOptions, CookieService } from 'ngx-cookie';


@Injectable()
export class SessionAuthService {
  constructor(private _cookieService: CookieService, private _router: Router) {
  }

  validateSession(): void {
    let getToken = this.getToken();
    if (typeof getToken !== 'undefined' && getToken !== 'undefined' && getToken.length >= 4) {

      if (getToken == null) {
        this._router.navigate(['/']);
      } else {
        this._router.navigate(['/pages/dashboard']);
      }
    } else {
      this._router.navigate(['/']);
    }

  }

  public logout(): void {
    this._cookieService.remove('tk_ovas');
    this._router.navigate(['/']);
  }

  public getToken(): string {
    const cookie = this._cookieService.get('tk_ovas');
    return (cookie) ? cookie : '[]';
  }

  public putToken(tk): void {
    let opts: CookieOptions = {
      expires: new Date('2030-07-19')
    };
    const cookie = this._cookieService.put('tk_ovas', tk, opts);
  }

}
