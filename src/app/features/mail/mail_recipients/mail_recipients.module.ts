import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mail_recipientsComponent } from './mail_recipients.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Mail_recipientsComponent
      }
    ])
  ],
  declarations: [Mail_recipientsComponent]
})
export class Mail_recipientsModule { }
