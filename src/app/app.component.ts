import {Component, OnInit} from '@angular/core';

export interface Player {
  name: string;
}

export interface Cell {
  x: number,
  y: number,
  status: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public players: Player[] = [];
  public namePlayer = '';
  public field: Cell[][] = [[], [], []];
  public turn: number = 0;


  constructor() {
  }

  ngOnInit() {

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let cell: Cell = {x: i, y: j, status: 'empty'};
        this.field[i].push(cell)
      }
    }
  }


  addPlayer() {
    if (this.namePlayer.trim()) {
      let player: Player = {name: this.namePlayer};
      this.players.push(player);
      this.namePlayer = '';
      console.log(this.players.length)
    }
  }

  click(cell: Cell) {
    if (cell.status == 'empty') {
      if (this.turn % 2 == 0) {
        cell.status = 'crossed'
      } else {
        cell.status = 'zero'
      }
      this.turn++;
      console.log(this.turn)
    }
  }
}
