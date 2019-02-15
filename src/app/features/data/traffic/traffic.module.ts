import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficComponent } from './traffic.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
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
