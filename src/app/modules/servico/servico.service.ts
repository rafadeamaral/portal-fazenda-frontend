import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServicoAutorizador} from '../../shared/domain/servico-autorizador.domain';

@Injectable()
export class ServicoService {

  private readonly URL_API = environment.api_url + '/servico/status';

  constructor(private http: HttpClient) { }

  findAtual(): Observable<ServicoAutorizador[]> {
    return this.http.get<ServicoAutorizador[]>(this.URL_API);
  }

}
