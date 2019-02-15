import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { History_logComponent } from './history_log.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: History_logComponent
      }
    ])
  ],
  declarations: [History_logComponent]
})
export class History_logModule { }
