import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoStatusAtualComponent } from './servico-status-atual/servico-status-atual.component';
import {ServicoRoutingModule} from './servico-routing.module';

@NgModule({
  declarations: [ServicoStatusAtualComponent],
  imports: [
    CommonModule,
    ServicoRoutingModule
  ]
})
export class ServicoModule { }
