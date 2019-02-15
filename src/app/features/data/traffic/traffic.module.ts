import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficComponent } from './traffic.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TrafficComponent
      }
    ])
  ],
  declarations: [TrafficComponent]
})
export class TrafficModule { }
