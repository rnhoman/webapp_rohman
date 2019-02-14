import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { SmartadminDatatableModule } from '@app/shared/ui/datatable/smartadmin-datatable.module';
import { NgDatepickerModule } from 'ng2-datepicker';

import { ClientsComponent } from './clients.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SmartadminDatatableModule,
    NgDatepickerModule,
    RouterModule.forChild([{
      path: '', component: ClientsComponent
    }])
  ],
  declarations: [ClientsComponent]
})
export class ClientsModule { }
