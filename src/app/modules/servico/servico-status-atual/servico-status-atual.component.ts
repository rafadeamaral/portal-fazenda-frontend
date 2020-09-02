import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ServicoService} from '../servico.service';
import {ServicoWrapper} from '../../../shared/domain/servico-wrapper';
import {ProgressTableComponent} from '../../../shared/components/progress-table/progress-table.component';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-servico-status-atual',
  templateUrl: './servico-status-atual.component.html',
  styleUrls: ['./servico-status-atual.component.sass']
})
export class ServicoStatusAtualComponent implements OnInit, AfterViewInit {

  status: ServicoWrapper[] = [];
  rowGroupMetadata: any;

  @ViewChild('progressTable') private progressTable: ProgressTableComponent;

  constructor(private servicoService: ServicoService,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.findAtual();
    this.cd.detectChanges();
  }

  findAtual(): void {
    this.status = [];
    this.progressTable.hideMessage();
    this.servicoService.findAtual()
      .pipe(finalize(() => {
        this.progressTable.showMessage(this.status.length === 0);
        setTimeout(() => this.findAtual(), 300000);
      }))
      .subscribe(value => {
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
