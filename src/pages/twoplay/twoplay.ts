import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { WelcomePage } from "../welcome/welcome";

/**
 * Generated class for the TwoplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-twoplay",
  templateUrl: "twoplay.html"
})
export class TwoplayPage {
  squares = Array(9).fill(null);
  mark: any;
  chooser: String;
  emptySquares = [];
  winner = null;
  xScore = 0;
  oScore = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}

  ionViewWillEnter() {
    let chooser = this.alertCtrl.create({
      title: "Player 1, Choose Your Mark",
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

  move(position) {
    if (!this.winner && !this.squares[position]) {
      this.squares[position] = this.mark;
      if (this.checkRow()) {
        this.winner = this.mark;
        if ((this.winner = this.mark === "X")) {
          this.xScore++;
        } else {
          this.oScore++;
        }
        this.winningMessage();
      }
      this.mark = this.mark === "X" ? "O" : "X";
      this.checkRow();
    }
  }

  winningMessage() {
    let winningAlert = this.alertCtrl.create({
      title: `Player ${this.winner} has won!`,
      subTitle: `Would you like to play again?`,
      buttons: [
        {
          text: "Yes",
          handler: data => {
            this.restartGame();
          }
        },
        {
          text: "No",
          handler: () => {
            this.navCtrl.push(WelcomePage, {
              xScore: this.xScore,
              oScore: this.oScore
            });
          }
        }
      ]
    });
    winningAlert.present();
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
  restartGame() {
    this.squares = Array(9).fill(null);
    this.mark = "X";
    this.winner = null;
    let chooser = this.alertCtrl.create({
      title: "Player 1, Choose Your Mark",
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
}
