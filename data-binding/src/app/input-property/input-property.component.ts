import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs: ['nome'] //input property
})
export class InputPropertyComponent implements OnInit {

  // @Input() nome: string = ''; //input property
  @Input('nome') //input property

  nome: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
