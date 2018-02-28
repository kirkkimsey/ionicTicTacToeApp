import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HighscorePage } from './highscore';

@NgModule({
  declarations: [
    HighscorePage,
  ],
  imports: [
    IonicPageModule.forChild(HighscorePage),
  ],
})
export class HighscorePageModule {}
