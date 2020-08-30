import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServicoWrapper} from '../../shared/domain/servico-wrapper';

@Injectable()
export class ServicoService {

  private readonly URL_API = environment.api_url + '/servico/status';

  constructor(private http: HttpClient) { }

  findAtual(): Observable<ServicoWrapper[]> {
    return this.http.get<ServicoWrapper[]>(this.URL_API);
  }

  findByAutorizador(id: number): Observable<ServicoWrapper[]> {
    return this.http.get<ServicoWrapper[]>(`${this.URL_API}/autorizador/${id}`);
  }

}
