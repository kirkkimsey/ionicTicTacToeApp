import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ActionSheetController } from "ionic-angular";
import { SingleplayPage } from "../singleplay/singleplay";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-welcome",
  templateUrl: "welcome.html"
})
export class WelcomePage {
  oScore: string;
  xScore: string;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad WelcomePage");
    this.xScore = this.navParams.get("xScore");
    this.oScore = this.navParams.get("oScore");
  }
  play() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: "Single Player",
          handler: () => {
            this.navCtrl.push("SingleplayPage");
          }
        },
        {
          text: "Two Player",
          handler: () => {
            this.navCtrl.push("TwoplayPage");
          }
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    actionSheet.present();
  }
  highScore() {
    this.navCtrl.push("HighscorePage", {
      xScore: this.xScore,
      oScore: this.oScore
    });
  }
  exit() {
    console.log("Exit Clicked");
  }
}
