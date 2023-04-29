import { Injectable } from "@angular/core";
import Swal from 'sweetalert2'
import { GenericUtil } from "./generic.utils";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class SweetAlert {


  constructor(private util: GenericUtil) { }

  spinnerShow(title?: string) {

    let swalTitle = this.util.isNullOrUndefined(title) ? '' : title;

    Swal.fire({
      html: `<label
              style="font-weight: bold;
              text-align: center;
              color: #0277BD">
                ${swalTitle}
              </label>`,
      allowOutsideClick: false,
      allowEscapeKey: false,
      timerProgressBar: true,
      showConfirmButton: false,
    })
    Swal.showLoading()
  }

  spinnerHide() {
    Swal.hideLoading();
    Swal.clickConfirm();
  }

  completed(text: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: ' ' + text,
    })
  }

  error(text: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'error',
      title: ' ' + text,
    })
  }

  warning(texto: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'warning',
      html: '<b>Atenção:</b><p style="text-align: left" >' + texto + "</p>",
    })
  }

  setError(error: HttpErrorResponse) {
    if (error.status == 500) {
      this.error('Atenção: ' + this.handleError(error));
    } else {
      this.error('Atenção: ' + this.handleError(error));
    }
  }

  private handleError(error: HttpErrorResponse): string {
    return this.protocolTexts(error.status, error.message);
  }

  private protocolTexts(num: number, msg: string): string {
    switch (num) {
      case 0: return 'Sem comunicação com o Servidor! :(';
      case 200: return num + ' - A requisição foi bem sucedida.';
      case 301: return num + ' - O recurso foi movido permanentemente para outra URI.\n' + msg;
      case 302: return num + ' - O recurso foi movido temporariamente para outra URI.\n' + msg;
      case 400: return num + ' - Solicitação inválida!.';
      case 404: return num + ' - Não encontrado. O recurso solicitado não foi encontrado!';
      case 405: return num + ' - Método não permitido. O método HTTP utilizado não é permitido para o recurso identificado na URL!';
      case 410: return num + ' - O recurso solicitado está indisponível mas seu endereço atual não é conhecido.';
      case 415: return num + ' - Tipo de mídia não suportada!';
      case 500: return num + ' - O servidor não foi capaz de concluir a requisição devido a um erro inesperado.';
      case 503: return num + ' - O servidor não é capaz de processar a requisição pois está temporariamente indisponível.';
      default: return 'Protocolo não reportado\n' + msg;
    }
  }
}
