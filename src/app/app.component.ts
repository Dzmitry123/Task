import {Component, OnInit} from '@angular/core';

export interface Player {
  name: string;
}
export interface Cell {
  x: number,
  y: number,
  crossed: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public players: Player[] = [];
  public namePlayer = '';
  public cells: Cell[] = [];


  constructor() {
  }

  ngOnInit() {

    for (let i=0; i<3; i++) {
      let cell: Cell = {x: i, y: 0, crossed: 'empty'};
      this.cells.push(cell)
    }
  }



  addPlayer() {
    let player: Player = {name: this.namePlayer};
    this.players.push(player);
    this.namePlayer = '';
    console.log(this.players.length)
  }
}
