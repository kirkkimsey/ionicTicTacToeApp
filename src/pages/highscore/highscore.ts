import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the HighscorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-highscore",
  templateUrl: "highscore.html"
})
export class HighscorePage {
  xScore: string;
  oScore: string;
  scores = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  ionViewWillLoad() {
    this.scores = [
      (this.xScore = this.navParams.get("xScore")),
      (this.oScore = this.navParams.get("oScore"))
    ];
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad HighscorePage");
  }
}
