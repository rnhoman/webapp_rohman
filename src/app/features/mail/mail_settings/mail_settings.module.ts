import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mail_settingsComponent } from './mail_settings.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Mail_settingsComponent
      }
    ])
  ],
  declarations: [Mail_settingsComponent]
})
export class Mail_settingsModule { }
