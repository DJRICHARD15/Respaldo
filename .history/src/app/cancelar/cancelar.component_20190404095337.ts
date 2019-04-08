import { HttpClient } from '@angular/common/http';
import { Orden_Gasto } from './../model/OrdenGasto';
import { OrdenGastoService } from '../services/OrdenGasto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
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
  Swal: any;
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
      // Swal.fire({
      //   type: 'error',
      //   title: 'Oops...',
      //   text: 'Faltan Campos por llenar!',
      //   footer: '<a href></a>'
      // })
      const swalWithBootstrapButtons = swal.mixin({
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
      })
      swalWithBootstrapButtons({
        title: '¿Estás seguro?',
        text: '¡No podrás revertir esto!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: '¡Sí, bórralo!',
        cancelButtonText: 'No, cancelalo!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swalWithBootstrapButtons(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    } else {
      this.router.navigateByUrl('/faq')
    }
  };
}
