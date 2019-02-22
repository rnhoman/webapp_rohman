import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Landingpage_contentComponent } from './landingpage_content.component';
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
        component: Landingpage_contentComponent
      }
    ])
  ],
  declarations: [Landingpage_contentComponent]
})
export class Landingpage_contentModule { }
