import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Data_kwhmeterComponent } from './data_kwhmeter.component';
import { SmartadminDatatableModule } from '@app/shared/ui/datatable/smartadmin-datatable.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SmartadminDatatableModule,
    RouterModule.forChild([
      {
        path: '',
        component: Data_kwhmeterComponent
      }
    ])
  ],
  declarations: [Data_kwhmeterComponent]
})
export class Data_kwhmeterModule { }
