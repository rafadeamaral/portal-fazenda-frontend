import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServicoStatusComponent} from './servico-status/servico-status.component';

const routes: Routes = [
  {
    path: '',
    component: ServicoStatusComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class ServicoRoutingModule { }
