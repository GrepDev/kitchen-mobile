import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import { IngredientsPage } from '../ingredients/ingredients';
<<<<<<< HEAD
=======
import { RecipesPage } from '../recipes/recipes';
>>>>>>> 26edf66bdbc123ccdbfae338742fb65a9b83661b

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
<<<<<<< HEAD

=======
  goToRecipes() {
    this.navCtrl.push(RecipesPage);
  }
>>>>>>> 26edf66bdbc123ccdbfae338742fb65a9b83661b
}
