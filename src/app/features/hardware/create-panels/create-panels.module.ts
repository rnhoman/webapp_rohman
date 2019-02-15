import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePanelsComponent } from './create-panels.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
