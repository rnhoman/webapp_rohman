import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGroupsComponent } from './user-groups.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: UserGroupsComponent
    }])
  ],
  declarations: [UserGroupsComponent]
})
export class UserGroupsModule { }
