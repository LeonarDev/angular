import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  urlImagem1: string = "http://lorempixel.com.br/500/400/?1";
  urlImagem2: string = "http://lorempixel.com.br/500/400/?2";
  urlImagem3: string = "http://lorempixel.com.br/500/400/?3";

  constructor() { }

  ngOnInit(): void {
  }

}
