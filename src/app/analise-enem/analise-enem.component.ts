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
  erroMensagem: string;
  estadosNoGrafico = d3.set();
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
            datasets: [{
              label: 'RN',
              data: [Math.round(d3.mean(media))],
              backgroundColor: [
                'rgba(255, 99, 132, 0.3)'
              ],
              borderWidth: 2,
              borderColor: [
                'rgba(255,99,132,1)'
              ]
            }]
          },
          options: this.options
        });

        this.estadosNoGrafico.add('RN');
      });
  }

  ngOnInit() {
  }

  pesquisarEstado(label) {
    const ESTADO = label.valueAccessor.value;
    const COR_BARRA = this.gerarCorBarra();

    if (!this.estadosNoGrafico.has(ESTADO)) {
      this.api.getEscolasByEstado(ESTADO).subscribe(
        escolas => {
          let media = escolas[1].map(escola => {
            if (escola.enemMediaGeral > 0) {
              return escola.enemMediaGeral;
            }
          });

          this.adicionarEstadoAoGrafico(ESTADO, [Math.round(d3.mean(media))], COR_BARRA);
        });

      this.estadosNoGrafico.add(ESTADO);
    } else {
      this.erroMensagem = 'Escolha um estado que não esteja no gráfico.';
    }
  }

  private adicionarEstadoAoGrafico(estado, media, cor) {
    if (media == 0) { this.erroMensagem = `${estado} não possui nota cadastrada`; return }
    let novoDataset = {
      label: estado,
      data: media,
      borderWidth: 2,
      backgroundColor: [
        cor[0]
      ],
      borderColor: [
        cor[1]
      ]
    }
    this.chart.data.datasets.push(novoDataset);
    this.chart.update();
  }

  private gerarCorBarra(): string[] {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return [`rgba(${r},${g},${b},0.3)`, `rgba(${r},${g},${b},1)`];
  }
}
