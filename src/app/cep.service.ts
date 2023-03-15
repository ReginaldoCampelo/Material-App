import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private url = 'https://viacep.com.br/ws/{}/json/';

  constructor(private http: HttpClient) { }

  consultarCep(cep: string): Observable<any> {
    const urlCep = this.url.replace('{}', cep);
    return this.http.get(urlCep);
  }
}
