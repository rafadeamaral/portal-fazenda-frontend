import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServicoStatusAtualComponent} from './servico-status-atual/servico-status-atual.component';

const routes: Routes = [
  {
    path: '',
    component: ServicoStatusAtualComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class ServicoRoutingModule { }
