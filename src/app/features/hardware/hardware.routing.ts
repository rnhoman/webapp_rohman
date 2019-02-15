import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [

  {
    path: 'device',
    loadChildren: './device/device.module#DeviceModule',
    data: {pageTitle: 'Device'}
  },
  {
    path: 'panel_locations',
    loadChildren: './panel_locations/panel_locations.module#Panel_locationsModule',
    data: {pageTitle: 'Panel Locations'}
  },
  {
    path: 'create-panels',
    loadChildren: './create-panels/create-panels.module#CreatePanelsModule',
    data: {pageTitle: 'Create Panels'}
  },
  {
    path: 'panel-image',
    loadChildren: './panel-image/panel-image.module#PanelImageModule',
    data: {pageTitle: 'Panel Images'}
  },
  {
    path: 'billing-customers',
    loadChildren: './billing-customers/billing-customers.module#BillingCustomersModule',
    data: {pageTitle: 'Billing Customers'}
  },
  {
    path: 'create-billing',
    loadChildren: './create-billing/create-billing.module#CreateBillingModule',
    data: {pageTitle: 'Create Billing'}
  }
];


export const routing = RouterModule.forChild(routes)
