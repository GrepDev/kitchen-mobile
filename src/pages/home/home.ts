import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HelpPage } from "../help/help";
import { IngredientsPage } from '../ingredients/ingredients';
import RecipesPage from '../recipes/recipes';
import localForage from "localforage";
import { HelpModalPage } from '../help-modal/help-modal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string;
  password: string;
  public localStorage: LocalForage; 
  public firstTimeRunString: string;
  public firstTimeRun = false;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {
  }

  ionViewWillEnter(){
    localForage.getItem(this.firstTimeRunString).then((value)=>{
      console.log("Value is: " + value);
      if(value == null){
        this.openModalWindow();
        localForage.setItem(this.firstTimeRunString, true );
      }
    })
  }

  goToRegister() {
    this.navCtrl.push(HelpPage);
  }
  goToIngredients() {
    this.navCtrl.push(IngredientsPage);
  }
  goToRecipes() {
    this.navCtrl.push(RecipesPage);
  }

  openModalWindow(){
    let myModal = this.modalCtrl.create(HelpModalPage);
    myModal.present();
  }
}
