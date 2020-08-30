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

  changeDate(event: Date[]): void {
    if (event.length === 2) {
      const dhInicio = event[0];
      const dhFim = event[1];
      if (dhInicio && dhFim) {
        this.dateFilter.hideOverlay();
        this.servicoService.findByPeriodo(dhInicio, dhFim).subscribe(value => {
          this.status = value;
        });
      }
    }
  }

}
