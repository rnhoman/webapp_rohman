import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import gql from 'graphql-tag';

import { AuthService } from '../../../core/_services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    // login: boolean = true;
    username: string = '';
    password: string = '';
    name: string = '';

    constructor(private authService: AuthService) {}

    ngOnInit() {

    }

    login() {
      const getLogin = gql`
        mutation {
          login(
            data: {
              username: ""
              password: ""
            }
          ) {
            username {
              username
              id
            }
            token
          }
        }
      `
    }
    // loginForm: FormGroup;
    // loading = false;
    // submitted = false;
    // returnUrl: string;
    // error = '';

    // constructor(
    //     private formBuilder: FormBuilder,
    //     private route: ActivatedRoute,
    //     private router: Router,
    //     private authenticationService: AuthService,
    //     private ngSpinner: NgxSpinnerService) {}

    // ngOnInit() {
    //     this.loginForm = this.formBuilder.group({
    //         username: ['', Validators.required],
    //         password: ['', Validators.required]
    //     });
    //     this.authenticationService.logout();
    //     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // }

    // get f() { return this.loginForm.controls; }

    // onSubmit() {
    //     this.submitted = true;
    //     if (this.loginForm.invalid) {
    //         return;
    //     }
    //     this.ngSpinner.show();
    //     this.authenticationService.login(this.f.username.value, this.f.password.value)
    //         .pipe(first())
    //         .subscribe(
    //             data => {
    //                 Swal(
    //                     'Sukses!',
    //                     'Anda berhasil login!',
    //                     'success'
    //                 );
    //                 // console.log(data);
    //                 this.router.navigate([this.returnUrl]);
    //             },
    //             error => {
    //                 this.error = error;
    //                 this.ngSpinner.hide();
    //                 Swal(
    //                     'Gagal!',
    //                     'Username/password tidak cocok!',
    //                     'error'
    //                 );
    //             });
    // }
}