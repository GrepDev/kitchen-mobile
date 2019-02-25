import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class EdamamApiProvider {

  private baseUrl = 'https://api.edamam.com/';
  private ingredientsUrl = 'https://api.edamam.com/api/food-database/parser?app_key=d1bf31a95d67109d48fb02e4b81c3075&app_id=fc8fb72e&ingr=';
  private recipesUrl = 'https://api.edamam.com/search?app_id=1d98004b&app_key=ebc588849964cbb0d475489c084fa0e4';
  private currentFood: any = {};
  private requestBody;
  private recipesList = [];
  private MAX_RECIPES = 5;
  private index;
  private noRecipesMessage = "Sorry, no recipes found matching your ingredients. Try to add a few more ingredients";
  private errorOccurredMessage = "Ooops! Something went wrong!";
  

  public getBaseUrl() {
    return this.baseUrl;
  }


  constructor(public http: Http, public storage: Storage) {
    console.log('Data provider has been constructed');
  }

  getIngredientsData(ingredients): Observable<any> {
    console.log('DEBUG: getIngredientsData',ingredients);
    let url = this.ingredientsUrl + encodeURI(ingredients);
    return this.http.get(`${url}`).map(response => {
      this.currentFood = response.json();
      console.log('DEBUG: getIngredientsData.currentFood',this.currentFood);
      console.log('DEBUG: getIngredientsData',this.currentFood.parsed);
      if(this.currentFood.parsed.length > 0)
        return this.currentFood.parsed[0].food;
      else
        return "No results";
    })
  }
  getRecipesData(ingredients): Observable<any> {
  
    let url = this.recipesUrl + encodeURI(ingredients);
    console.log('DEBUG: url' + url);

    return this.http.post(`${url}`, this.requestBody).map(response => {
      console.log('DEBUG: POST Triggered');
      this.currentFood = response.json();
      console.log('DEBUG: response',response);
      console.log('DEBUG: getIngredientsData.currentFood',this.currentFood);
      console.log('DEBUG: getIngredientsData',this.currentFood.parsed);
      if(response.status === 200 )
        if (this.currentFood.hits.length > 0) {
          if(this.currentFood.hits.length >= this.MAX_RECIPES){
            for(this.index=0; this.index < this.MAX_RECIPES; this.index++){
              this.recipesList.push(this.currentFood.hits[this.index].recipe)
            }
            return this.recipesList;
          }
          return this.currentFood.hits[0].recipe;
        } else {
          alert(this.noRecipesMessage);
          return null;
        }
        
      else
        alert(this.errorOccurredMessage);
    })
  }
  getIngredientID(ingredientName): Observable<any> {
    console.log('DEBUG getIngredientID: ',ingredientName);
    let url = this.ingredientsUrl + encodeURI(ingredientName);
    return this.http.get(`${url}`).map(response => {
      this.currentFood = response.json();
      return this.currentFood.parsed[0].food.foodId;
    })
  }


}