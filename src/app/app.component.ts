import {Component, OnInit} from '@angular/core';

export interface Player {
  name: string;
}

export interface Cell {
  x: number,
  y: number,
  status: string
}

export interface Combination {
  x: number,
  y: number
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
  public winnerCombinations: Combination[][] = [];
  public winner: string = '';
  public xCells: Cell[] = [];
  public oCells: Cell[] = [];


  constructor() {
    this.creatNewGame();
    this.createWinnerCombination();
  }

  ngOnInit() {

  }

  checkWinning() {

    // let IsXWon = this.winnerCombinations.some(combination => {
    //   return combination.every(cell => {
    //     return xCells.some(xCell => {
    //       return xCell.x === cell.x && xCell.y === cell.y;
    //     })
    //   });
    // });
    // if (IsXWon) {
    //   this.winner = this.players[0].name;
    // }
    if (this.turn % 2 == 0) {
      let Is0Won = this.winnerCombinations.some(combination => {
        return combination.every(cell => this.oCells.some(oCell => oCell.x === cell.x && oCell.y === cell.y));
      });
      if (Is0Won) {
        this.winner = this.players[0].name;
      }
    } else {
      let IsXWon = this.winnerCombinations.some(combination => {
        return combination.every(cell => this.xCells.some(xCell => xCell.x === cell.x && xCell.y === cell.y));
      });
      if (IsXWon) {
        this.winner = this.players[1].name;
      }
    }
  }

  createWinnerCombination() {
    this.winnerCombinations.push([{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}]);
    this.winnerCombinations.push([{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}]);
    this.winnerCombinations.push([{x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}]);
    this.winnerCombinations.push([{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}]);
    this.winnerCombinations.push([{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}]);
    this.winnerCombinations.push([{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}]);
    this.winnerCombinations.push([{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0}]);
    this.winnerCombinations.push([{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}]);
  }


  addPlayer() {
    if (this.namePlayer.trim()) {
      let player: Player = {name: this.namePlayer};
      this.players.push(player);
      this.namePlayer = '';
    }
  }

  click(cell: Cell) {
    if (!this.winner && cell.status == 'empty') {
      if (this.turn % 2 == 0) {
        cell.status = 'crossed';
        this.xCells.push(cell);
      } else {
        cell.status = 'zero';
        this.oCells.push(cell);
      }
      this.turn++;
      if (this.turn >= 5) {
        this.checkWinning();
      }
    }

  }

  creatNewGame() {
    this.field = [[], [], []];
    this.turn = 0;
    this.winner = '';
    this.players = [];
    this.xCells = [];
    this.oCells = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let cell: Cell = {x: i, y: j, status: 'empty'};
        // console.log(cell.x, '/', cell.y)
        this.field[i].push(cell)
      }
    }
  }
}
