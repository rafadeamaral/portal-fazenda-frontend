import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Autorizador} from '../domain/autorizador.domain';

@Injectable()
export class AutorizadorService {

  private readonly URL_API = environment.api_url + '/autorizador';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Autorizador[]> {
    return this.http.get<Autorizador[]>(this.URL_API);
  }

}
