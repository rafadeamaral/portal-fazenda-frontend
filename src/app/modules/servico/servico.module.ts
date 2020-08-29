import { NgModule } from '@angular/core';
import { ServicoStatusAtualComponent } from './servico-status-atual/servico-status-atual.component';
import {ServicoRoutingModule} from './servico-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [ServicoStatusAtualComponent],
  imports: [
    SharedModule,
    ServicoRoutingModule
  ]
})
export class ServicoModule { }
