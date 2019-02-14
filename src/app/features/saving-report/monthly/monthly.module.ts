import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MonthlyComponent } from './monthly.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '', component: MonthlyComponent
    }]),
    NgxChartsModule
  ],
  declarations: [MonthlyComponent]
})
export class MonthlyModule { }
