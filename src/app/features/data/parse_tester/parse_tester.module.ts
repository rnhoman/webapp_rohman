import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parse_testerComponent } from './parse_tester.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Parse_testerComponent
      }
    ])
  ],
  declarations: [Parse_testerComponent]
})
export class Parse_testerModule { }
