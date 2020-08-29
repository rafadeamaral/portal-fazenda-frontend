import {ServicoStatus} from './servico-status.domain';

export interface ServicoStatusWrapper {
  status: ServicoStatus;
  dhHistorico: string;
}
