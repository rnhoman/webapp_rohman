import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelImageComponent } from './panel-image.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PanelImageComponent
      }
    ])
  ],
  declarations: [PanelImageComponent]
})
export class PanelImageModule { }
