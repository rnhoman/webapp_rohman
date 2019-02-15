import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mail_notificationComponent } from './mail_notification.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Mail_notificationComponent
      }
    ])
  ],
  declarations: [Mail_notificationComponent]
})
export class Mail_notificationModule { }
