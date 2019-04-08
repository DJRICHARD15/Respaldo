import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
const Swal = require('sweetalert2')

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  alert(): void {
    // tslint:disable-next-line:no-debugger
    debugger;
}
info(): void {

}
error(): void {

}
success(): void {

}
// tslint:disable-next-line:member-ordering
title = 'sweetAlert';
// tslint:disable-next-line:member-ordering
Swal: any;

  constructor() { }

  ngOnInit() {
  }

  btnClickHome = function () {
    // Swal(){}
    // tslint:disable-next-line:prefer-const
    let validacionUser = $('#user').val();
    // tslint:disable-next-line:prefer-const
    let validacionPassword = $('#password').val();

    if (validacionUser === '' || validacionPassword === '') {
      alert('Debes llenar todos los campos');
      return false;
    } else {
      this.router.navigateByUrl('/inicio');
    }
    Swal.fire({
      title: 'Ingrese sus datos!',
      text: 'Bienvenido ',
      type: 'error',
      confirmButtonText: 'Cool'
    })
  };
}
