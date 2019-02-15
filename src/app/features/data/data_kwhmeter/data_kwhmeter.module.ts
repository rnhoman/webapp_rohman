import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data_kwhmeterComponent } from './data_kwhmeter.component';

@NgModule({
  imports: [
    CommonModule,
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
