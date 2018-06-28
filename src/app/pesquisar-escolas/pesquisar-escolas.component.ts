import { Component, OnInit } from '@angular/core';
import { EducacaoDadosAPIService } from '../service/educacao-dados-api.service';

@Component({
  selector: 'app-pesquisar-escolas',
  templateUrl: './pesquisar-escolas.component.html',
  styleUrls: ['./pesquisar-escolas.component.css']
})
export class PesquisarEscolasComponent implements OnInit {
  erroMensagem: string;
  listaEscolas: any = []
  detalheEscola: any = []

  constructor(private api: EducacaoDadosAPIService) { }

  ngOnInit() {

  }
  detalharEscola(indice: number) {
    this.api.getDetalheEscola(this.listaEscolas[indice]['cod']).subscribe(
      detalhes => {
        console.log(detalhes)
        return detalhes
       
      }
    )

  }

  detalhesEscola(indice: number) {
    this.api.getDetalheEscola(this.listaEscolas[indice]['cod']).subscribe(
      detalhes => {
        this.detalheEscola = detalhes
        console.log(this.detalheEscola)
      }
    )

  }
  pesquisarEscola(form) {
   this.api.getEscolasByNome(form.value['nome-escola']).subscribe(

      escolas => {
        console.log('ok');
        this.listaEscolas = escolas[1]
        console.log('deu certo');
      });
  }
}
