import {Component, OnInit, ViewChild} from '@angular/core';
import {ServicoWrapper} from '../../../shared/domain/servico-wrapper';
import {ServicoService} from '../servico.service';
import {Calendar} from 'primeng';

@Component({
  selector: 'app-servico-status-periodo',
  templateUrl: './servico-status-periodo.component.html',
  styleUrls: ['./servico-status-periodo.component.sass']
})
export class ServicoStatusPeriodoComponent implements OnInit {

  rangeDates: Date[];
  status: ServicoWrapper[] = [];
  rowGroupMetadata: any;
  rowGroupMetadata2: any;
  pt: any;

  @ViewChild('dateFilter') private dateFilter: Calendar;

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      clear: 'Limpar'
    };
  }

  onSort(): void {
    this.rowGroupMetadata = {};
    this.rowGroupMetadata2 = {};
    if (this.status) {
      for (let i = 0; i < this.status.length; i++) {
        const rowData = this.status[i];
        const idAutorizador = rowData.autorizador.idAutorizador;
        const servico = `${idAutorizador}-${rowData.servico.idServico}`;
        if (i === 0) {
          this.rowGroupMetadata[idAutorizador] = {index: 0, size: 1};
          this.rowGroupMetadata2[servico] = {index: 0, size: 1};
        } else {
          const previousRowData = this.status[i - 1];
          const previousRowGroup = previousRowData.autorizador.idAutorizador;
          if (idAutorizador === previousRowGroup) {
            this.rowGroupMetadata[idAutorizador].size++;
          } else {
            this.rowGroupMetadata[idAutorizador] = {index: i, size: 1};
          }
          const previousRowGroup2 = `${previousRowGroup}-${previousRowData.servico.idServico}`;
          if (servico === previousRowGroup2) {
            this.rowGroupMetadata2[servico].size++;
          } else {
            this.rowGroupMetadata2[servico] = {index: i, size: 1};
          }
        }
      }
    }
  }

  changeDate(event: Date[]): void {
    if (event.length === 2) {
      const dhInicio = event[0];
      const dhFim = event[1];
      if (dhInicio && dhFim) {
        this.dateFilter.hideOverlay();
        this.servicoService.findByPeriodo(dhInicio, dhFim).subscribe(value => {
          this.status = value;
          this.onSort();
        });
      }
    }
  }

}
