import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServicoWrapper} from '../../shared/domain/servico-wrapper';
import {ConverterService} from '../../shared/services/converter.service';

@Injectable()
export class ServicoService {

  private readonly URL_API = environment.api_url + '/servico/status';

  constructor(private http: HttpClient,
              private converterService: ConverterService) { }

  findAtual(): Observable<ServicoWrapper[]> {
    return this.http.get<ServicoWrapper[]>(this.URL_API);
  }

  findByAutorizador(id: number): Observable<ServicoWrapper[]> {
    return this.http.get<ServicoWrapper[]>(`${this.URL_API}/autorizador/${id}`);
  }

  findByPeriodo(dhInicio: Date, dhFim: Date): Observable<ServicoWrapper[]> {
    const params = new HttpParams()
      .append('dhInicio', this.converterService.formatDate(dhInicio))
      .append('dhFim', this.converterService.formatDate(dhFim));
    return this.http.get<ServicoWrapper[]>(`${this.URL_API}/periodo`, {params});
  }

}
