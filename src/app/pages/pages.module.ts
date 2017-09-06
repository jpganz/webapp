import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import { CookieModule, CookieService } from 'ngx-cookie';
import { UserService } from '../helpers/user/service/user.service';
import { SessionAuthService } from '../helpers/sessionAuth/sessionAuth.service';

@NgModule({
  imports: [CommonModule, AppTranslationModule, CookieModule.forRoot(), NgaModule, routing],
  declarations: [Pages],
  providers: [CookieService, UserService, SessionAuthService]
})
export class PagesModule {
}
