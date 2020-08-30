import { NgModule } from '@angular/core';
import { ServicoStatusAtualComponent } from './servico-status-atual/servico-status-atual.component';
import {ServicoRoutingModule} from './servico-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ServicoService} from './servico.service';
import { ServicoStatusAutorizadorComponent } from './servico-status-autorizador/servico-status-autorizador.component';
import { ServicoStatusPeriodoComponent } from './servico-status-periodo/servico-status-periodo.component';

@NgModule({
  declarations: [ServicoStatusAtualComponent, ServicoStatusAutorizadorComponent, ServicoStatusPeriodoComponent],
  imports: [
    SharedModule,
    ServicoRoutingModule
  ],
  providers: [ServicoService]
})
export class ServicoModule { }
