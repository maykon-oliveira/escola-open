import { Component, OnInit } from '@angular/core';
import { EducacaoDadosAPIService } from '../service/educacao-dados-api.service';

@Component({
  selector: 'app-pesquisar-escolas',
  templateUrl: './pesquisar-escolas.component.html',
  styleUrls: ['./pesquisar-escolas.component.css']
})
export class PesquisarEscolasComponent implements OnInit {

  listaEscolas: any = []
  detalheEscola: any = []

  constructor(private api: EducacaoDadosAPIService) { }

  ngOnInit() {
    this.api.getEscolasByNome('presidente').subscribe(

      escolas => {
        console.log('ok');
        this.listaEscolas = escolas[1]
        console.log('deu certo');
      });
  }

  codigoEscola(indice: number) {
    this.api.getDetalheEscola(this.listaEscolas[indice]['cod']).subscribe(
      detalhes => {
        this.detalheEscola = detalhes
        console.log(this.detalheEscola)
      }
    )

  }
  pesquisarEscola(escola: string) {
    console.log(escola);
    this.api.getEscolasByNome(escola).subscribe(

      escolas => {
        console.log('ok');
        this.listaEscolas = escolas[1]
        console.log('deu certo');
      });
  }
}
