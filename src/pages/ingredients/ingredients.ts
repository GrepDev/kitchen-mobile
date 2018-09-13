import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EdamamApiProvider } from '../../providers/edamam-api/edamam-api';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ingredients',
  templateUrl: 'ingredients.html',
})
export class IngredientsPage {

  private food;

  public getFood(){
    return this.food;
  }

  public sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  private nullMessage: string = "Search for an ingredient first";

  constructor(public navCtrl: NavController, public navParams: NavParams, private edamamApiProvider:EdamamApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngredientsPage');
  }

  getIngredients(ingredient){
    //console.log("Interogating service");
  }

  addIngredient(ingredient){ 
    if(ingredient == null){
      document.getElementById("defaultList").innerHTML = this.nullMessage;
      return null;
    }
    this.edamamApiProvider.getIngredientsData(ingredient).subscribe(data => {
      this.food = data;
      document.getElementById("defaultList").innerHTML = this.food;
    })
  }
}
