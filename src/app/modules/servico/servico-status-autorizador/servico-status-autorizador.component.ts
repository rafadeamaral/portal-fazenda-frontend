import {Component, OnInit, ViewChild} from '@angular/core';
import {ServicoWrapper} from '../../../shared/domain/servico-wrapper';
import {ServicoService} from '../servico.service';
import {ProgressTableComponent} from '../../../shared/components/progress-table/progress-table.component';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-servico-status-autorizador',
  templateUrl: './servico-status-autorizador.component.html',
  styleUrls: ['./servico-status-autorizador.component.sass']
})
export class ServicoStatusAutorizadorComponent implements OnInit {

  status: ServicoWrapper[] = [];

  @ViewChild('progressTable') private progressTable: ProgressTableComponent;

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
  }

  changeAutorizador(id: number): void {
    this.status = [];
    this.progressTable.hideMessage();
    this.servicoService.findByAutorizador(id)
      .pipe(finalize(() => this.progressTable.hideProgress(this.status.length === 0)))
      .subscribe(value => this.status = value);
  }

}
