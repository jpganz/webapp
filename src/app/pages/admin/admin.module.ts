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
import { UsersComponents } from './components/users/users.components';
import { RoleComponent } from './components/role/role.component';
import { DefaultModalRole } from './components/role/default-modal/default-modal.component';
import { DeleteModalRole } from './components/role/delete-modal/delete-modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModalUser } from './components/users/default-modal/default-modal.component';
import { DeleteModalUser } from './components/users/delete-modal/delete-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    NgbModalModule,
    routing
  ],
  declarations: [
    Admin,
    Systemparameters,
    UsersComponents,
    RoleComponent,
    DefaultModalRole,
    DeleteModalRole,
    DefaultModalUser,
    DeleteModalUser
  ],
  entryComponents: [
    DefaultModalRole,
    DeleteModalRole,
    DefaultModalUser,
    DeleteModalUser
  ]
})
export class AdminModule {
}
