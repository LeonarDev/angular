import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-example',
  templateUrl: './tooltip-example.component.html',
  styleUrls: ['./tooltip-example.component.css']
})
export class TooltipExampleComponent implements OnInit {
  public visible = false;

  constructor() { }

  ngOnInit(): void {  }
  
  exibeTooltip() {
    this.visible = true;
    console.log(`Visible: ${this.visible}`);
  }
  
  escondeTooltip() {
    this.visible = false;
    console.log(`Visible: ${this.visible}`);
  }
}
