import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';
import { SessionAuthService } from '../helpers/sessionAuth/sessionAuth.service';
import { ProvidersService } from '../helpers/providers/service/providers.service';

@Component({
  selector: 'pages',
  providers: [SessionAuthService, ProvidersService],
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
              private _prov: ProvidersService) {

    this._session.validateSession();
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
