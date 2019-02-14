import {Component, OnInit} from '@angular/core';
import { UsersService } from '@app/core/_services/Users.service';
import { LayoutService } from '@app/core/services/layout.service';

@Component({

  selector: 'sa-login-info',
  templateUrl: './login-info.component.html',
})
export class LoginInfoComponent implements OnInit {


  constructor(
    public us: UsersService,
    private layoutService: LayoutService) {
  }

  ngOnInit() {
  }

  toggleShortcut() {
    this.layoutService.onShortcutToggle()
  }

}
