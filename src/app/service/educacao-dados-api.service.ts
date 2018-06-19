import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EducacaoDadosAPIService {

  private URL_BASE_API = 'http://educacao.dadosabertosbr.com/api/';

  constructor(private httpClienteService: HttpClient) { }

  getEscolasByNome(nome: string) {

    if (nome.length <= 3) {
      throw new Error('Erro: a busca tem que ter mais de 3 (três) caracteres');
    } else {
      return this.httpClienteService.get(this.URL_BASE_API + `escolas/buscaavancada?nome=${nome}`);
    }

  }
}
