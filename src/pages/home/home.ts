import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelpPage } from "../help/help";
import { IngredientsPage } from '../ingredients/ingredients';
import RecipesPage from '../recipes/recipes';

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
    this.navCtrl.push(HelpPage);
  }
  goToIngredients() {
    this.navCtrl.push(IngredientsPage);
  }
  goToRecipes() {
    this.navCtrl.push(RecipesPage);
  }
}
