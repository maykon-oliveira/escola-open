import { EducacaoDadosAPIService } from './../service/educacao-dados-api.service';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-analise-enem',
  templateUrl: './analise-enem.component.html',
  styleUrls: ['./analise-enem.component.css']
})
export class AnaliseEnemComponent implements OnInit {
  chart: Chart;
  tipoGrafico: string = 'bar';
  options = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    title: {
      display: true,
      text: 'Média das notas do ENEM das escolas do Brasil'
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontColor: 'rgb(255, 99, 132)'
      }
    },
    categoryPercentage: 1.0,
    barPercentage: 0.5
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
            datasets: [{
              label: 'RN',
              data: [Math.round(d3.mean(media))],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
              ],
              borderWidth: 2,
              borderColor: [
                'rgba(255,99,132,1)'
              ]
            }
            ]
          },
          options: this.options
        });
      });
  }

  ngOnInit() {
  }

  addEstadoGrafico(label) {
    const ESTADO = label.valueAccessor.value
    this.api.getEscolasByEstado(ESTADO).subscribe(
      escolas => {
        let media = escolas[1].map(escola => {
          if (escola.enemMediaGeral > 0) {
            return escola.enemMediaGeral;
          }
        });

        this.chart.data.labels.push(ESTADO);
        this.chart.data.datasets.forEach((dataset) => {
          dataset.data.push([Math.round(d3.mean(media))]);
        });
        this.chart.update();
      });

  }

  removerEstadoGrafico(chart: Chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }
}
