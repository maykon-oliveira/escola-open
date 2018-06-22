import { EducacaoDadosAPIService } from "./../service/educacao-dados-api.service";
import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
import { Chart } from 'chart.js';

@Component({
  selector: "app-analise-enem",
  templateUrl: "./analise-enem.component.html",
  styleUrls: ["./analise-enem.component.css"]
})
export class AnaliseEnemComponent implements OnInit {
  chart = [];
  tipoGrafico: string = "bar";
  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    layout: { padding: { left: 10,  right: 10, top: 10, bottom: 10 } },
    title: {
      display: true,
      text: 'Média das notas do ENEM das escolas do Brasil'
    }
  }

  constructor(private api: EducacaoDadosAPIService) {
    this.api.getEscolasByEstado('RN').subscribe(
      escolas => {
        let media = escolas[1].map(escola => {
          if (escola.enemMediaGeral > 0) {
            return escola.enemMediaGeral;
          }
        });

        this.chart = new Chart('canvas', {
          type: this.tipoGrafico,
          data: {
            labels: ['RN'],
            datasets: [
              {
                data: [Math.round(d3.mean(media))],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)'
                ],
                borderWidth: 1
              }
            ]
          },
          options: this.options
        });
      });
  }

  ngOnInit() {
  }

  addEstadoGrafico(chart: Chart, label: string, data: number) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push([data]);
    });
    chart.update();
  }

  removerEstadoGrafico(chart: Chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }
}
