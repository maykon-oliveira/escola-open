import { EducacaoDadosAPIService } from "./../service/educacao-dados-api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-analise-enem",
  templateUrl: "./analise-enem.component.html",
  styleUrls: ["./analise-enem.component.css"]
})
export class AnaliseEnemComponent implements OnInit {
  totalNotasEnem = 0;
  public dados: any[] = [
    {data: this.totalNotasEnem, label: 'RN'}
  ];
  public tipoGrafico: string = "bar";

  constructor(private api: EducacaoDadosAPIService) {}

  ngOnInit() {
    this.api.getEscolasByEstado("RN").subscribe(
      escolasRN => {
        const lista = escolasRN[1];
        this.totalNotasEnem = 0;
        lista.forEach(escola => {
          this.totalNotasEnem += escola.enemMediaGeral;
          // this.dados.push( {"data": [50], "label": 'RN'});
        });
        console.log(this.totalNotasEnem);
      }
    );
  }
}
