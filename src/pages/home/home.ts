import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import { IngredientsPage } from '../ingredients/ingredients';
import { RecipesPage } from '../recipes/recipes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string;
  password: string;

  constructor(public navCtrl: NavController) {

  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }
  goToIngredients() {
    this.navCtrl.push(IngredientsPage);
  }
  goToRecipes() {
    this.navCtrl.push(RecipesPage);
  }
}
