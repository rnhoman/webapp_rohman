import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUsersComponent } from './create-users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateUsersComponent
      }
    ])
  ],
  declarations: [CreateUsersComponent]
})
export class CreateUsersModule { }
