import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {  
    path: 'history',
    loadChildren: './history/history.module#HistoryModule',
    data: { pageTitle: 'Data History' }
  },
  {
    path: 'history_log',
    loadChildren: './history_log/history_log.module#History_logModule',
    data: { pageTitle: 'History Log' }
  },
  {
    path: 'data_kwhmeter',
    loadChildren: './data_kwhmeter/data_kwhmeter.module#Data_kwhmeterModule',
    data: { pageTitle: 'Last KWHMeter Data'}
  },
  {
    path: 'traffic',
    loadChildren: './traffic/traffic.module#TrafficModule',
    data: { pageTitle: 'Traffic Data' }
  },
  {
    path: 'parse_tester',
    loadChildren: './parse_tester/parse_tester.module#Parse_testerModule',
    data: { pageTitle: 'Parse Tester' }
  }
];

export const routing = RouterModule.forChild(routes);
