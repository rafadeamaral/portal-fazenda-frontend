import {ServicoStatus} from './servico-status.enum';

export interface ServicoStatusWrapper {
  status: ServicoStatus;
  dhHistorico: string;
}
