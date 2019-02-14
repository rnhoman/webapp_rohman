import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [

  {
    path: 'monthly',
    loadChildren: './monthly/monthly.module#MonthlyModule',
    data: {pageTitle: 'Monthly'}
  }
];


export const routing = RouterModule.forChild(routes)
