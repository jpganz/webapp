/**
 * Created by juanlopez on 13/07/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { Systemparameters } from './components/system_parameters/system_parameters.component';

import { routing } from './admin.routing';
import { Admin } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    Admin,
    Systemparameters
  ]
})
export class AdminModule {
}
