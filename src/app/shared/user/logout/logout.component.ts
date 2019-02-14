import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NotificationService } from "@app/core/services/notification.service";

import { AuthService } from "@app/core/_services/Auth.service";
import { UsersService } from "@app/core/_services/Users.service";

@Component({
  selector: "sa-logout",
  template: `
    <div id="logout" class="btn-header transparent pull-right">
        <span> <a title="Sign Out"><i class="fa fa-sign-out"></i></a> </span>
    </div>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {
  // (click)="showPopup()",
  public user

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private router: Router,
    private notificationService: NotificationService
  ) {
  }

  // showPopup() {
  //   this.notificationService.smartMessageBox(
  //     {
  //       title:
  //         "<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark' style='text-transform: capitalize' ><strong>" + this.userService.nameAdmin +"</strong></span> ?",
  //       content:
  //         "Anda akan keluar dari aplikasi Primasaver",
  //       buttons: "[No][Yes]"
  //     },
  //     ButtonPressed => {
  //       if (ButtonPressed == "Yes") {
  //         this.logout();
  //       }
  //     }
  //   );
  // }

  logout() {
    this.authService.logout()
    this.router.navigate(["/auth/login"]);
  }

  ngOnInit() {}
}
