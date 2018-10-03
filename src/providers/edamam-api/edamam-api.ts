import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EdamamApiProvider {

  private baseUrl = 'https://api.edamam.com/';
  private ingredientsUrl = 'https://api.edamam.com/api/food-database/parser?app_key=d1bf31a95d67109d48fb02e4b81c3075&app_id=fc8fb72e&ingr=';
  private recipesUrl = 'https://api.edamam.com/search?app_id=1d98004b&app_key=ebc588849964cbb0d475489c084fa0e4';
  
  private currentFood: any = {};

  public getBaseUrl() {
    return this.baseUrl;
  }

  constructor(public http: Http) {
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
        return this.currentFood.parsed[0].food.label;
      else
        return "No results";
    })
  }
  getRecipesData(ingredients): Observable<any> {
    console.log('DEBUG: getRecipesData',ingredients);
    let url = this.recipesUrl + "&q=" + encodeURI(ingredients);
    return this.http.get(`${url}`).map(response => {
      this.currentFood = response.json();
      console.log('DEBUG: response',response);
      console.log('DEBUG: getIngredientsData.currentFood',this.currentFood);
      console.log('DEBUG: getIngredientsData',this.currentFood.parsed);
      if(response.status === 200 )
        if (this.currentFood.hits.length > 0) {
          return this.currentFood.hits[0].recipe.label;
        } else {
          alert( "Sorry no results" );
          return "";
        }
        
      else
        alert( "Ooops!");
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
