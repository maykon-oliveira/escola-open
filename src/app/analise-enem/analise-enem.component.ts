import { EducacaoDadosAPIService } from './../service/educacao-dados-api.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-analise-enem',
  templateUrl: './analise-enem.component.html',
  styleUrls: ['./analise-enem.component.css']
})
export class AnaliseEnemComponent implements OnInit {

  grafico = []

  constructor(private api: EducacaoDadosAPIService) { }

  ngOnInit() {
    this.api.getEscolasByNome('Presidente').subscribe(
      escolas => {console.log(escolas[1])}
    );
  }

}
