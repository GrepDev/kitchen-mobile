import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EdamamApiProvider } from '../../providers/edamam-api/edamam-api';


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

  private noResults: string = "No results";

  private receivedResponse: string;

  private noResultsFound: string = "No results found! Try refining your search";

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

  getIngredients(queryText) {
    return null;
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  getIngredientsData(ingredient) {
    if (ingredient == null) {
      document.getElementById("defaultList").innerHTML = this.nullMessage;
      return null;
    }
    this.edamamApiProvider.getIngredientsData(ingredient).subscribe(data => {
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
      this.receivedResponse = data;
      if(this.receivedResponse == this.noResults) {
        alert(this.noResultsFound);
        return 0;
      }

      this.food.push(data);
    }
    )
    document.getElementById("defaultList").style.visibility = "hidden";
    document.getElementById("ingredientsContainer").style.visibility = "visible";
  }

  removeItem(item) {
    for (var i = 0; i < this.food.length; i++) {
      if (this.food[i] == item) {
        this.food.splice(i, 1);
      }
    }
  }
}
