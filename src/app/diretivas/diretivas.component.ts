import { dataList } from './../interface/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css'],
})
export class DiretivasComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public conditionSwitch: number = 1;
  public nome: string = '';
  public list: dataList[] = [
    { name: 'Gabriel', age: 21 },
    { name: 'João', age: 22 },
  ];
  public livros: dataList[] = [
    { name: 'Livro 1', age: 1888 },
    { name: 'Livro 2', age: 1999 },
  ];

  public addList(): void {
    this.list.push({ name: 'Carlos', age: 23 });
  }

  public onClickEventList(event: MouseEvent): void {
    console.log(event);
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  public salvar(): void {
    this.livros.push({ name: this.nome, age: 2020 });
    this.nome = '';
  }

  public onClick(): void {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }
}
