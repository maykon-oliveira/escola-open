import { EducacaoDadosAPIService } from "./../service/educacao-dados-api.service";
import { Component, OnInit } from "@angular/core";
import * as d3 from "d3";

@Component({
  selector: "app-analise-enem",
  templateUrl: "./analise-enem.component.html",
  styleUrls: ["./analise-enem.component.css"]
})
export class AnaliseEnemComponent implements OnInit {

  dados: any[] = [{ data: [20], label: 'RN' }];
  public tipoGrafico: string = "bar";

  constructor(private api: EducacaoDadosAPIService) { }

  ngOnInit() {
    let estados = ['RN', 'SP'];
    estados.forEach(estado => {
      this.api.getEscolasByEstado(estado).subscribe(
        escolas => {
          let nota = [];
          escolas[1].forEach(escola => {
            nota.push(escola.enemMediaGeral);
          });

          this.addObjetToList(estado, d3.mean(nota));
        }
      );
    });

  }

  addObjetToList(estado: string, nota: number) {
    this.dados.push(`{"data": ${nota}, "label": ${estado}}`);
  }
}
