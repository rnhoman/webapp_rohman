import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {  
    path: 'landingpage_content',
    loadChildren: './landingpage_content/landingpage_content.module#Landingpage_contentModule',
    data: { pageTitle: 'LandingPage' }
  },
  {
    path: 'create_contents',
    loadChildren: './create_contents/create_contents.module#Create_contentsModule',
    data: { pageTitle: 'Create Content' }
  }
];

export const routing = RouterModule.forChild(routes);
