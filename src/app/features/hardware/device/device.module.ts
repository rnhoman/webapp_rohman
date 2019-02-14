import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceComponent } from './device.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { CreateDeviceComponent } from './createDevice/createDevice.component'
//datepicker untuk menambahkan contract date pada create hardware
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { SmartadminInputModule } from '@app/shared/forms/input/smartadmin-input.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', 
        component: DeviceComponent
      },
      {
        path: 'create-device',
        component: CreateDeviceComponent
      }
  ]),
  SmartadminInputModule
  // BsDatepickerModule.forRoot()
  ],
  declarations: [
    DeviceComponent,
    EditDeviceComponent,
    CreateDeviceComponent
  ]
})
export class DeviceModule { }
