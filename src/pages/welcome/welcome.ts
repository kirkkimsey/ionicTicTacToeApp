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
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad WelcomePage");
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
            console.log("Two Player Clicked");
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
    this.navCtrl.push("HighscorePage");
  }
  exit() {
    console.log("Exit Clicked");
  }
}
