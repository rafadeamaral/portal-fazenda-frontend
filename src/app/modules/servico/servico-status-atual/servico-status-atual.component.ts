import { Component, OnInit } from '@angular/core';
import {ServicoService} from '../servico.service';

@Component({
  templateUrl: './servico-status-atual.component.html',
  styleUrls: ['./servico-status-atual.component.sass']
})
export class ServicoStatusAtualComponent implements OnInit {

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.servicoService.findAtual().subscribe(value => console.log(value.length));
  }

}
