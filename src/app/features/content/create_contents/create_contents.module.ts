import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Create_contentsComponent } from './create_contents.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: Create_contentsComponent
      }
    ])
  ],
  declarations: [Create_contentsComponent]
})
export class Create_contentsModule { }
