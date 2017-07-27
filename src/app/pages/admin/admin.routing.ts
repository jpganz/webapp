/**
 * Created by juanlopez on 13/07/17.
 */
import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { Admin } from './admin.component';
import { Systemparameters } from './components/system_parameters/system_parameters.component';

export const routes: Routes = [
  {
    path: '',
    component: Admin,
    children: [
      {path: 'system', component: Systemparameters }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
