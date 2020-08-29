import {Autorizador} from './autorizador.domain';
import {ServicoWrapper} from './servico-wrapper.domain';

export interface ServicoAutorizador {
  autorizador: Autorizador;
  servicos: ServicoWrapper[];
}
