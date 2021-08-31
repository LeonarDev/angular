import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Input() valor = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public incrementa() {
    this.valor++;
  }

  public decrementa() {
    this.valor--;
  }

}
