import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import { CookieModule, CookieService } from 'ngx-cookie';

@NgModule({
  imports: [CommonModule, AppTranslationModule, CookieModule.forRoot(), NgaModule, routing],
  declarations: [Pages],
  providers: [CookieService]
})
export class PagesModule {
}
