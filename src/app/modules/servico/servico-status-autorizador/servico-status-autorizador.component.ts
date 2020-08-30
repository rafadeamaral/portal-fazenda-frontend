import { Component, OnInit } from '@angular/core';
import {ServicoWrapper} from '../../../shared/domain/servico-wrapper';
import {ServicoService} from '../servico.service';

@Component({
  selector: 'app-servico-status-autorizador',
  templateUrl: './servico-status-autorizador.component.html',
  styleUrls: ['./servico-status-autorizador.component.sass']
})
export class ServicoStatusAutorizadorComponent implements OnInit {

  status: ServicoWrapper[] = [];

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
  }

  changeAutorizador(id: number): void {
    this.servicoService.findByAutorizador(id).subscribe(value => {
      this.status = value;
    });
  }

}
