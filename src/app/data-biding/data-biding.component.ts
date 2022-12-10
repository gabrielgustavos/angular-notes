import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css'],
})
export class DataBidingComponent {
  public nome: string = 'Gabriel';
  public idade: number = 21;

  public checkedDisabled: boolean = true;

  handleClick() {
    alert('hi');
  }

  
}
