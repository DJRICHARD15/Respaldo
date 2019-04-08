import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// tslint:disable-next-line:import-spacing
import { Swal }  from 'sweetalert2';

declare var jquery: any;
declare var $: any;
const Swal = require('sweetalert2')

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
