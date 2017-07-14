import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';
import { ProvidersService } from '../helpers/providers/service/providers.service';
import { SessionAuthService } from '../helpers/sessionAuth/sessionAuth.service';

@Component({
  selector: 'pages',
  providers: [ProvidersService, SessionAuthService],
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

  constructor(private _router: Router, private _menuService: BaMenuService,
              private _prov: ProvidersService, private _auth: SessionAuthService) {

    let getToken = this._auth.getToken();
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
    this._prov.getProviders().subscribe(res => console.log(res));
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
