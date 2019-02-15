import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingCustomersComponent } from './billing-customers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
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
