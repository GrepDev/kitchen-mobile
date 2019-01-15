import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import localForage from "localforage";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {
  public localStorage: LocalForage; 
  public veganString: string = "Vegan";
  public vegetarianString: string = "Vegetarian";
  public glutenString: string = "Gluten";
  public lactoseString: string = "Lactose";
  public falseString: string = "false";
  public trueString: string = "true";
  vegan: boolean = false;
  vegetarian: boolean = false;
  gluten: boolean = false;
  lactose: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    localForage.getItem(this.veganString).then((value)=>{ 
      if(value == this.trueString){
      this.vegan = true; }
    })
    localForage.getItem(this.vegetarianString).then((value)=>{ 
      if(value == this.trueString){
      this.vegetarian = true; }
    })
    localForage.getItem(this.glutenString).then((value)=>{ 
      if(value == this.trueString){
      this.gluten = true; }
    })
    localForage.getItem(this.lactoseString).then((value)=>{ 
      if(value == this.trueString){
      this.lactose = true; }
    })

    }

  isVegan(){
    if(this.vegan == true){
    localForage.removeItem(this.veganString);
    localForage.setItem(this.veganString, this.trueString);
    return 0; 
  }
    if(this.vegan == false){
      localForage.getItem(this.veganString).then((item) => {
        localForage.removeItem(this.vegetarianString);
        localForage.setItem(this.veganString, this.falseString );
      });
      return 0;
    }
  }

  isVegetarian(){
    if(this.vegetarian == true){
    localForage.removeItem(this.vegetarianString);
    localForage.setItem(this.vegetarianString, this.trueString);
    return 0; 
  }
    if(this.vegetarian == false){
      localForage.getItem(this.vegetarianString).then((item) => {
        localForage.removeItem(this.vegetarianString);
        localForage.setItem(this.vegetarianString, this.falseString );
      });
      return 0;
    }
  }

  isGlutenFree(){
    if(this.gluten == true){
    localForage.removeItem(this.glutenString);
    localForage.setItem(this.glutenString, this.trueString);
    return 0; 
  }
    if(this.gluten == false){
      localForage.getItem(this.glutenString).then((item) => {
        localForage.removeItem(this.glutenString);
        localForage.setItem(this.glutenString, this.falseString);
      });
      return 0;
    }
  }

  isLactoseIntollerant(){
    if(this.lactose == true){
    localForage.removeItem(this.lactoseString);
    localForage.setItem(this.lactoseString, this.trueString);
    return 0; 
  }
    if(this.lactose == false){ 
      localForage.getItem(this.lactoseString).then((item) => {
        localForage.removeItem(this.lactoseString);
        localForage.setItem(this.lactoseString, this.falseString);
      });
      return 0;
    }
  }

}
