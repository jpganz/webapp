/**
 * Created by juanlopez on 13/07/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { Providers } from './providers.components';
import { EditGestion } from './components/editGestion/editGestion.component';
import { EditResponse } from './components/editResponse/editResponse.component';
import { Gestions } from './components/gestions/gestions.component';
import { List } from './components/list/list.component';
import { Responses } from './components/responses/responses.component';

const routes: Routes = [
  {
    path: '',
    component: Providers,
    children: [
      {path: 'editGestion', component: EditGestion},
      {path: 'editGestion/:id', component: EditGestion},
      {path: 'editResponse', component: EditResponse},
      {path: 'editResponse/:id', component: EditResponse},
      {path: 'gestion/:id', component: Gestions},
      {path: 'gestion', component: Gestions},
      {path: 'list', component: List},
      {path: 'responses/:id', component: Responses},
    ]
  }
];

export const routing = RouterModule.forChild(routes);
