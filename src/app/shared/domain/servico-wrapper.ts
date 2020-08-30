import {Autorizador} from './autorizador.domain';
import {Servico} from './servico.domain';
import {ServicoStatus} from './servico-status.enum';

export interface ServicoWrapper {
  autorizador: Autorizador;
  servico: Servico;
  status: ServicoStatus;
  dhHistorico: string;
}
