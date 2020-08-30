import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'servicoStatus'
})
export class ServicoStatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value) {
      return null;
    } else {
      return `<i class="pi pi-circle-on ${value}"></i>`;
    }
  }

}
