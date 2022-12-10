import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <app-data-biding></app-data-biding>
    <app-diretivas></app-diretivas>
    <app-comunicacao-components
      [contador]="addValue"
    ></app-comunicacao-components>
    <br />
    <button (click)="add()">Add</button>
  `,
})
export class AppComponent {
  public addValue: number = 0;
  public add(): void {
    this.addValue += 1;
  }
}
