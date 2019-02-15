import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePanelsComponent } from './create-panels.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreatePanelsComponent
      }
    ])
  ],
  declarations: [CreatePanelsComponent]
})
export class CreatePanelsModule { }
