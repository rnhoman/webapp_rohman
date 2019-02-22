import { CreateBillingComponent } from './create-billing/create-billing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingCustomersComponent } from './billing-customers.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { SmartadminDatatableModule } from '@app/shared/ui/datatable/smartadmin-datatable.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SmartadminDatatableModule,
    RouterModule.forChild([
      {
        path: '',
        component: BillingCustomersComponent
      },
      {
        path: 'create-billing',
        component: CreateBillingComponent,
        data: {
          pageTitle: 'Create Billing'
        }
      }
    ])
  ],
  declarations: [BillingCustomersComponent, CreateBillingComponent]
})
export class BillingCustomersModule { }
