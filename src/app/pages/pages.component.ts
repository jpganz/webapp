import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';
import { SessionAuthService } from '../helpers/sessionAuth/sessionAuth.service';
import { AccountService } from '../helpers/account/service/account.service';

@Component({
  selector: 'pages',
  providers: [SessionAuthService, AccountService],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <ba-back-top position="200"></ba-back-top>
  `
})
export class Pages {
  private tk: string = '';
  private rol: string = '';

  constructor(private _router: Router, private _menuService: BaMenuService, private _session: SessionAuthService,
              private _auth: AccountService) {

    let getToken = this._session.getToken();
    if (typeof getToken !== 'undefined' && getToken !== 'undefined' && getToken.length >= 4) {
      this.tk = JSON.parse(getToken);
      if (this.tk == null) {
        this._router.navigate(['/']);
      }
    } else {
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
    //this._prov.getProviders().subscribe(res => console.log(res));
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);

    this._auth.getAccount().subscribe(res => console.log(res));
  }
}
