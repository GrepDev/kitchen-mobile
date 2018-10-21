import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EdamamApiProvider } from '../../providers/edamam-api/edamam-api';



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  private food = [];

  public getFood() {
    return this.food;
  }

  private foodID;

  public getFoodID() {
    return this.foodID;
  }

  private nullMessage: string = "Search for an ingredient first";

  private nullIngredientID: string = "Ingredient ID cannot be null";

  private duplicateIngredient: string = "The specified ingredient is already in your list"

  private noResponseFromWebService: string = "There was an error retrieving the response from the webservice"

  private noIngredientInTheList: string = "You currently don't have any ingredient added." +
    "You can either search for the ingredients that you have in your kitchen, " +
    "or those that you want to use in your recipe."

  constructor(public navCtrl: NavController, public navParams: NavParams, private edamamApiProvider: EdamamApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngredientsPage');
  }

  getRecipes(queryText) {
    return null;
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  getRecipesData(ingredient) {
    console.log("DEBUG",ingredient)
    if (ingredient == null) {
      document.getElementById("defaultList").innerHTML = this.nullMessage;
      return null;
    }
    this.edamamApiProvider.getRecipesData(ingredient).subscribe(data => {
      if (data == null) {
        this.sleep(5000)
      }
      if (data == null) {
        alert(this.noResponseFromWebService);
      }
      for (var i = 0; i < this.food.length; i++) {
        if (this.food[i] == data) {
          alert(this.duplicateIngredient);
          return 0;
        }
      }
      if(data.trim().length > 0)
        this.food.push(data);
    }
    )
    document.getElementById("defaultList").style.visibility = "hidden";
    document.getElementById("recipesContainer").style.visibility = "visible";
  }

  removeItem(item) {
    for (var i = 0; i < this.food.length; i++) {
      if (this.food[i] == item) {
        this.food.splice(i, 1);
      }
    }
  }
}