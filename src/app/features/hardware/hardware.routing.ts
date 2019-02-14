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
    path: 'panel-image',
    loadChildren: './panel-image/panel-image.module#PanelImageModule',
    data: {pageTitle: 'Panel Images'}
  }
];


export const routing = RouterModule.forChild(routes)
