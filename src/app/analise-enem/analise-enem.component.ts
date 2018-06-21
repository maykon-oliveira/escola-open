import { EducacaoDadosAPIService } from "./../service/educacao-dados-api.service";
import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
import { ViewChild } from "@angular/core";
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: "app-analise-enem",
  templateUrl: "./analise-enem.component.html",
  styleUrls: ["./analise-enem.component.css"]
})
export class AnaliseEnemComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  dados: any[] = [{ data: [20], label: 'RN' }];
  public tipoGrafico: string = "bar";

  constructor(private api: EducacaoDadosAPIService) { }

  ngOnInit() {
    let estados = ['RN'];
    estados.forEach(estado => {
      this.api.getEscolasByEstado(estado).subscribe(
        escolas => {
          let nota = [];
          escolas[1].forEach(escola => {
            if (escola.enemMediaGeral > 0) {
              nota.push(escola.enemMediaGeral);
            }
          });

          this.addObjetToList(estado, d3.mean(nota));
        }
      );
    });
  }

  private addObjetToList(estado: string, nota: number) {
    nota = Math.trunc(nota);

    this.dados.push({data: [nota], label: estado});

    // this.chart.chart.reset();
    console.log(this.chart.datasets[0].data);
  }
}
