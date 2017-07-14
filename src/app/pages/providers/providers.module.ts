/**
 * Created by juanlopez on 13/07/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { Providers } from './providers.components';
import { routing } from './providers.routing';
import { List } from './components/list/list.component';
import { EditResponse } from './components/editResponse/editResponse.component';
import { Responses } from './components/responses/responses.component';
import { EditGestion } from './components/editGestion/editGestion.component';
import { Gestions } from './components/gestions/gestions.component';
import { DefaultModal } from './components/list/default-modal/default-modal.component';
import { DeleteModal } from './components/list/delete-modal/delete-modal.component';
import { DefaultModalG } from './components/editGestion/default-modal/default-modal.component';
import { DeleteModalG } from './components/editGestion/delete-modal/delete-modal.component';
import { DeleteModalGe } from './components/gestions/delete-modal/delete-modal.component';
import { DeleteModalRes } from './components/responses/delete-modal/delete-modal.component';
import { DefaultModalER } from './components/editResponse/default-modal/default-modal.component';
import { DeleteModalER } from './components/editResponse/delete-modal/delete-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    SlimLoadingBarModule.forRoot(),
    routing
  ],
  declarations: [
    Providers,
    List,
    Gestions,
    EditResponse,
    Responses,
    EditGestion,
    DefaultModal,
    DeleteModal,
    DefaultModalG,
    DeleteModalG,
    DeleteModalGe,
    DeleteModalRes,
    DeleteModalER,
    DefaultModalER
  ],
  entryComponents: [
    DefaultModal,
    DeleteModal,
    DefaultModalG,
    DeleteModalG,
    DeleteModalGe,
    DeleteModalRes,
    DeleteModalER,
    DefaultModalER
  ]
})
export class ProvidersModule {
}
