import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {  
    path: 'mail_settings',
    loadChildren: './mail_settings/mail_settings.module#Mail_settingsModule',
    data: { pageTitle: 'Mail Setting'}
  },
  {
    path: 'mail_recipients',
    loadChildren: './mail_recipients/mail_recipients.module#Mail_recipientsModule',
    data: { pageTitle: 'Mail Recipients'}
  },
  {
    path: 'mail_notification',
    loadChildren: './mail_notification/mail_notification.module#Mail_notificationModule',
    data: { pageTitle: 'Mail Notification' }
  }
];

export const routing = RouterModule.forChild(routes);
