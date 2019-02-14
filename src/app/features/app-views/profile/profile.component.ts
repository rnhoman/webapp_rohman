import { Component, OnInit } from '@angular/core';
import { UsersService } from '@app/core/_services/Users.service';

@Component({
  selector: 'sa-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  constructor(public userService: UsersService) {}

  ngOnInit() {
  }

}
