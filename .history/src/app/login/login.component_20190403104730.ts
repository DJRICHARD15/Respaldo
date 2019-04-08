
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
title = 'sweetAlert';
Swal: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClickHome = function () {
    // Swal(){}
    // tslint:disable-next-line:prefer-const
    let validacionUser = $('#user').val();
    // tslint:disable-next-line:prefer-const
    let validacionPassword = $('#password').val();

    if (validacionUser === '' || validacionPassword === '') {
      return false;
    } else {
      this.router.navigateByUrl('/inicio');
    }
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      type: 'error',
      confirmButtonText: 'Cool'
    })
  };
}
