import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ServicoWrapper} from '../../../shared/domain/servico-wrapper';
import {ServicoService} from '../servico.service';
import {Calendar} from 'primeng';
import {ProgressTableComponent} from '../../../shared/components/progress-table/progress-table.component';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-servico-status-periodo',
  templateUrl: './servico-status-periodo.component.html',
  styleUrls: ['./servico-status-periodo.component.sass']
})
export class ServicoStatusPeriodoComponent implements OnInit, AfterViewInit {

  rangeDates: Date[];
  status: ServicoWrapper[] = [];
  pt: any;

  rows = 12;
  totalRecords = 0;

  @ViewChild('dateFilter') private dateFilter: Calendar;
  @ViewChild('progressTable') private progressTable: ProgressTableComponent;

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

  ngAfterViewInit(): void {
    setTimeout(() => this.progressTable.showMessage(true));
  }

  changeDate(event: Date[]): void {
    if (event.length === 2) {
      this.status = [];
      const dhInicio = event[0];
      const dhFim = event[1];
      if (dhInicio && dhFim) {
        this.dateFilter.hideOverlay();
        this.progressTable.hideMessage();
        this.findByPeriodo(0);
      } else {
        this.progressTable.showMessage(true);
      }
    }
  }

  paginate(event): void {
    console.log(event);
    this.findByPeriodo(event.page);
  }

  findByPeriodo(page: number): void {
    if (this.rangeDates.length !== 2) {
      return;
    }

    const dhInicio = this.rangeDates[0];
    const dhFim = this.rangeDates[1];
    if (dhInicio && dhFim) {
      this.servicoService.findByPeriodo(dhInicio, dhFim, page, this.rows)
        .pipe(finalize(() => this.progressTable.showMessage(this.status.length === 0)))
        .subscribe(value => {
          this.status = value.content;
          this.totalRecords = value.totalElements;
        });
    }
  }

}
