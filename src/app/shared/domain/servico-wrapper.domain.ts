import {Servico} from './servico.domain';
import {ServicoStatusWrapper} from './servico-status-wrapper.domain';

export interface ServicoWrapper {
  servico: Servico;
  status: ServicoStatusWrapper[];
}
