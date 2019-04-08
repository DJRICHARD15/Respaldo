import { HttpClient } from '@angular/common/http';
import { Orden_Gasto } from './../model/OrdenGasto';
import { OrdenGastoService } from '../services/OrdenGasto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private http: HttpClient,
    private router: Router,
    private ordenGastoDataService: OrdenGastoService, ) { }

  ngOnInit() {
  }
  btnClickHome =  function () {
    // tslint:disable-next-line:prefer-const
    let validacionTipoPago = $('#tipoPago').val();
    // tslint:disable-next-line:prefer-const
    let validacionRuc = $('#ruc').val();
    // tslint:disable-next-line:prefer-const
    let validacionOrdG = $('#OrdG').val();
    // tslint:disable-next-line:prefer-const
    let validaciondate = $('#date').val();
    // tslint:disable-next-line:prefer-const
    let validacionOrden = $('#Orden').val();
    // tslint:disable-next-line:prefer-const
    let validacionDescripcion = $('#Descripcion').val();
    // tslint:disable-next-line:prefer-const
    let validacionCantidad = $('#Cantidad').val();
    // tslint:disable-next-line:prefer-const
    let validacionPreUni = $('#PreUni').val();
    // tslint:disable-next-line:prefer-const
    let validacionIva = $('#Iva').val();
    // tslint:disable-next-line:prefer-const
    let validacionOtrImp = $('#OtrImp').val();


    // tslint:disable-next-line:curly
    // tslint:disable-next-line:no-unused-expression
    if (validacionTipoPago === '' || validacionRuc === '' || validacionOrdG === '' || validaciondate === '' || validacionOrden === '' ||
    // tslint:disable-next-line:max-line-length
    validacionDescripcion === '' || validacionCantidad === '' || validacionPreUni === '' || validacionIva === '' || validacionOtrImp === '' ) {
      Swal.fire({
        title: 'Custom animation with Animate.css',
        animation: false,
        customClass: {
          popup: 'animatedtada'
        }
      })
    } else {
      this.router.navigateByUrl('/inicio')
    }
  };
}
