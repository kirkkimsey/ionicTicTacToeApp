import { Component, Input } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";

/**
 * Generated class for the SingleplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-singleplay",
  templateUrl: "singleplay.html"
})
export class SingleplayPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}

  ionViewWillEnter() {
    let chooser = this.alertCtrl.create({
      title: "Choose Your Player:",
      buttons: [
        {
          text: "X",
          handler: data => {
            this.chooser = "X";
            this.setPlayer();
          }
        },
        {
          text: "O",
          handler: data => {
            this.chooser = "O";
            this.setPlayer();
          }
        }
      ]
    });
    chooser.present();
  }

  //this.squares = Array(9).fill(null);
  mark: any;
  chooser: String;
  msg: String;
  squares = [["", "", ""], ["", "", ""], ["", "", ""]];
  emptySquares = [];
  random: any;
  winner = null;
  ionViewDidLoad() {
    console.log("ionViewDidLoad SingleplayPage");
  }

  get gameStatusMessage() {
    return this.winner
      ? `Player ${this.winner} has won!`
      : `Player ${this.mark}'s turn`;
  }
  setPlayer() {
    this.mark = this.chooser;
  }

  move(row, col) {
    if (!this.winner && !this.squares[row][col]) {
      this.squares[row][col] = this.mark;
      if (this.checkRow()) {
        this.winner = this.mark;
      }
      this.checkRow();
      this.switchMark();
      this.computerMove(row, col);
    }
  }
  computerMove(row, col) {
    this.emptySquares;
    this.random;
    if (this.squares[row][col]) {
      this.random = Math.ceil(Math.random() * this.squares[row][col].length);
      this.squares[this.random] = this.mark;
      this.checkRow();
      this.switchMark();
    }
  }

  switchMark() {
    if ((this.mark = "X")) {
      this.mark = "O";
    } else {
      this.mark = "X";
    }
  }
  checkRow() {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // colums
      [0, 4, 8],
      [2, 4, 6] // diagonal
    ];
    for (const condition of conditions) {
      if (
        this.squares[condition[0]] &&
        this.squares[condition[0]] === this.squares[condition[1]] &&
        this.squares[condition[1]] === this.squares[condition[2]]
      ) {
        return true;
      }
    }
    return false;
  }
}
