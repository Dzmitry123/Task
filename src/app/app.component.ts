import {Component, OnInit} from '@angular/core';

export interface Player {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public players: Player[] = [];
  public namePlayer = '';

  constructor() {
  }

  ngOnInit() {

  }


  addPlayer() {
    let player: Player = {name: this.namePlayer};
    this.players.push(player);
    this.namePlayer = '';
    console.log(this.players.length)
  }
}
