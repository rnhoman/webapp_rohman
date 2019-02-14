import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from "./auth.routing";
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
  ],
  declarations: [ AuthComponent]
})
export class AuthModule { }
