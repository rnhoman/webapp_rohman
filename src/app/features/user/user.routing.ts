
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [

  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule',
    data: {pageTitle: 'Clients Company'}
  },
  {
    path: 'user-groups',
    loadChildren: './user-groups/user-groups.module#UserGroupsModule',
    data: {pageTitle: 'User Groups'}
  },
  {
    path: 'create-client',
    loadChildren: './create-client/create-client.module#CreateClientModule',
    data: {pageTitle: 'Create Client'}
  },
  {
    path: 'user-account',
    loadChildren: './user-account/user-account.module#UserAccountModule',
    data: {pageTitle: 'User Account'}
  },
  {
    path: 'create-users',
    loadChildren: './create-users/create-users.module#CreateUsersModule',
    data: {pageTitle: 'Create Users'}
  }

];


export const routing = RouterModule.forChild(routes)
