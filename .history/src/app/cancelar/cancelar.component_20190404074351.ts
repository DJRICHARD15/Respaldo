import { HttpClient } from '@angular/common/http';
import { Orden_Gasto } from './../model/OrdenGasto';
import { OrdenGastoService } from '../services/OrdenGasto.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css'],
  // providers: [OrdenGastoService]
})
export class CancelarComponent implements OnInit {
  title = 'sweetAlert';

  date: Date;
  constructor(
    private http: HttpClient,
    private ordenGastoDataService: OrdenGastoService, ) { }

  ngOnInit() {
  }
  btnClickHome =  function () {
    // tslint:disable-next-line:prefer-const
    let validacionTipoPago = $ ('#tipoPago').val();
    // tslint:disable-next-line:prefer-const
    let validacionRuc = $('#ruc').val();

    if (validacionTipoPago === '' || validacionRuc === '') {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        type: 'success',
        title: 'Es necesario ingresar sus datos'
      })
    } else {
      this.router.navigateByUrl('/inicio');

    }
  };
}
