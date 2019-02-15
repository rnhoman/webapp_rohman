import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingCustomersComponent } from './billing-customers.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: BillingCustomersComponent
      }
    ])
  ],
  declarations: [BillingCustomersComponent]
})
export class BillingCustomersModule { }
