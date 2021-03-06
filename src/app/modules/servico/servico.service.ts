import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServicoWrapper} from '../../shared/domain/servico-wrapper';
import {ConverterService} from '../../shared/services/converter.service';
import {Autorizador} from '../../shared/domain/autorizador.domain';
import {Page} from '../../shared/domain/page';

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

  findByPeriodo(dhInicio: Date, dhFim: Date, page: number, size: number): Observable<Page<ServicoWrapper>> {
    dhFim.setHours(23, 59, 59);
    const params = new HttpParams()
      .append('dhInicio', this.converterService.formatDate(dhInicio))
      .append('dhFim', this.converterService.formatDate(dhFim))
      .append('page', page.toString(10))
      .append('size', size.toString(10));
    return this.http.get<Page<ServicoWrapper>>(`${this.URL_API}/periodo`, {params});
  }

  findByIndisponibilidade(): Observable<Autorizador[]> {
    return this.http.get<Autorizador[]>(`${this.URL_API}/indisponibilidade`);
  }

}
