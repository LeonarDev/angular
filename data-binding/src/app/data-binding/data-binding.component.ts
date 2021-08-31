import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [
    `
      .highlight {
          background-color: yellow;
          font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {
  urlImagem1: string = "http://lorempixel.com.br/300/200/?1";
  urlImagem2: string = "http://lorempixel.com.br/300/200/?2";
  urlImagem3: string = "http://lorempixel.com.br/300/200/?3";

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = "Angular";

  botaoClicado() {
    alert("Botão clicado!")
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
