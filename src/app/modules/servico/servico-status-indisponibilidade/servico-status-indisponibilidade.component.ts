import { Component, OnInit } from '@angular/core';
import {ServicoService} from '../servico.service';
import {Autorizador} from '../../../shared/domain/autorizador.domain';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-servico-status-indisponibilidade',
  templateUrl: './servico-status-indisponibilidade.component.html',
  styleUrls: ['./servico-status-indisponibilidade.component.sass']
})
export class ServicoStatusIndisponibilidadeComponent implements OnInit {

  autorizadores: Autorizador[] = [];

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.findByIndisponibilidade();
  }

  findByIndisponibilidade(): void {
    this.servicoService.findByIndisponibilidade()
      .pipe(finalize(() => setTimeout(() => this.findByIndisponibilidade(), 300000)))
      .subscribe(value => this.autorizadores = value);
  }

}
