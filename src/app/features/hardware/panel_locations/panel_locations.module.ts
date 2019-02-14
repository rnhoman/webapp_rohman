import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { Panel_locationsComponent } from './panel_locations.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '', component: Panel_locationsComponent
    }])
  ],
  declarations: [Panel_locationsComponent]
})
export class Panel_locationsModule { }
