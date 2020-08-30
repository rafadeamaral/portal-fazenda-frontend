import { Component, OnInit } from '@angular/core';
import {ServicoService} from '../servico.service';
import {ServicoWrapper} from '../../../shared/domain/servico-wrapper';

@Component({
  selector: 'app-servico-status-atual',
  templateUrl: './servico-status-atual.component.html',
  styleUrls: ['./servico-status-atual.component.sass']
})
export class ServicoStatusAtualComponent implements OnInit {

  status: ServicoWrapper[] = [];
  rowGroupMetadata: any;

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.servicoService.findAtual().subscribe(value => {
      this.status = value;
      this.onSort();
    });
  }

  onSort(): void {
    this.rowGroupMetadata = {};
    if (this.status) {
      for (let i = 0; i < this.status.length; i++) {
        const rowData = this.status[i];
        const idAutorizador = rowData.autorizador.idAutorizador;
        if (i === 0) {
          this.rowGroupMetadata[idAutorizador] = {index: 0, size: 1};
        } else {
          const previousRowData = this.status[i - 1];
          const previousRowGroup = previousRowData.autorizador.idAutorizador;
          if (idAutorizador === previousRowGroup) {
            this.rowGroupMetadata[idAutorizador].size++;
          } else {
            this.rowGroupMetadata[idAutorizador] = {index: i, size: 1};
          }
        }
      }
    }
  }

}
