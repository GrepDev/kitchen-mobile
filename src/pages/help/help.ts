import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IngredientsPage } from '../ingredients/ingredients';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }
  
  goToIngredients() {
    this.navCtrl.push(IngredientsPage);
  }

}
