import { Component, Input } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  // squares = Array(9).fill(null);
  squares: [any][any];
  ionViewDidLoad() {
    console.log("ionViewDidLoad SingleplayPage");
  }
  move(position) {}

  restart() {
    console.log("Restart Clicked");
  }
}
