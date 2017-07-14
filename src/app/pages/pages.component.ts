import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';
import { ProvidersService } from '../helpers/providers/service/providers.service';

@Component({
  selector: 'pages',
  providers: [ProvidersService],
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

  constructor(private _menuService: BaMenuService, private _prov: ProvidersService) {
  }

  ngOnInit() {
    this._prov.getProviders().subscribe(res => console.log(res));
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
