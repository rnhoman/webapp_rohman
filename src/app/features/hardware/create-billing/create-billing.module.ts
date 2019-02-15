import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBillingComponent } from './create-billing.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateBillingComponent
      }
    ])
  ],
  declarations: [CreateBillingComponent]
})
export class CreateBillingModule { }
