import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Landingpage_contentComponent } from './landingpage_content.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
