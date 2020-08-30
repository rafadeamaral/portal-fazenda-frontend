import { Component, OnInit } from '@angular/core';
import {ServicoService} from '../servico.service';
import {ServicoWrapper} from '../../../shared/domain/servico-wrapper';

@Component({
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
      this.updateRowGroupMetaData();
    });
  }

  onSort(): void {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData(): void {
    this.rowGroupMetadata = {};
    if (this.status) {
      for (let i = 0; i < this.status.length; i++) {
        const rowData = this.status[i];
        const autorizador = rowData.autorizador.dsAutorizador;
        if (i === 0) {
          this.rowGroupMetadata[autorizador] = {index: 0, size: 1};
        } else {
          const previousRowData = this.status[i - 1];
          const previousRowGroup = previousRowData.autorizador.dsAutorizador;
          if (autorizador === previousRowGroup) {
            this.rowGroupMetadata[autorizador].size++;
          } else {
            this.rowGroupMetadata[autorizador] = {index: i, size: 1};
          }
        }
      }
    }
  }

}
