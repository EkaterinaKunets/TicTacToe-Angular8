import { Component, OnInit } from '@angular/core';
import { Box } from '../box';
import { Player } from '../player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  boxes: Box[];
  player: Player;
  winner: Player;
  isWon: boolean;
  step: number;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.player = Player.X;
    this.winner = Player.none;
    this.isWon = false;
    this.boxes = [
      { player: Player.none },
      { player: Player.none },
      { player: Player.none },
      { player: Player.none },
      { player: Player.none },
      { player: Player.none },
      { player: Player.none },
      { player: Player.none },
      { player: Player.none }
    ];
    this.step = 0;
  }

  makeMove(box: Box) {
    if (!this.isWon) {
      if (box.player === Player.none) {
        box.player = this.player;
        this.player = this.player === Player.X ? Player.O : Player.X;
        this.step++;
        console.log(this.step);
        if (!this.isWon) {
          this.calculateWinner();
        }
      }
    }
  }

  get isDraw() {
    return this.step === 9;
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (this.boxes[a].player === this.boxes[b].player && this.boxes[a].player === this.boxes[c].player && this.boxes[a].player !== Player.none) {
        this.winner = this.boxes[a].player;
        this.isWon = true;
      }
    }
  }
}
