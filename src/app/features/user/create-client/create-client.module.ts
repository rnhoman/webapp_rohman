import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientComponent } from './create-client.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateClientComponent
      }
    ])
  ],
  declarations: [CreateClientComponent]
})
export class CreateClientModule { }
