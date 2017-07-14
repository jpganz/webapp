/**
 * Created by juanlopez on 13/07/17.
 */
import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { Admin } from './admin.component';

export const routes: Routes = [
  {
    path: '/admin',
    component: Admin,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
