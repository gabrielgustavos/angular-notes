import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comunicacao-components',
  templateUrl: './comunicacao-components.component.html',
  styleUrls: ['./comunicacao-components.component.css'],
})
export class ComunicacaoComponentsComponent {
  @Input() public contador: number = 0;


}
