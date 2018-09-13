import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { resolveDefinition } from '@angular/core/src/view/util';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EdamamApiProvider {

  private baseUrl = 'https://api.edamam.com/';
  private ingredientsUrl = 'https://api.edamam.com/api/food-database/parser?app_key=d1bf31a95d67109d48fb02e4b81c3075&app_id=fc8fb72e&ingr=';
  private currentFood: any = {};

  public getBaseUrl(){
    return this.baseUrl;
  }

  constructor(public http: Http) {
    console.log('Data provider has been constructed');
  }

  getIngredients(ingredients) {
    let url = this.ingredientsUrl + encodeURI(ingredients); 
    return new Promise(resolve => {
        this.http.get(`${url}`).subscribe(res => resolve(res.json()));
    });
  }

  getIngredientsData(ingredients) : Observable<any> {
    let url = this.ingredientsUrl + encodeURI(ingredients); 
    return this.http.get(`${url}`).map(response => {
      this.currentFood = response.json();
      return this.currentFood.parsed[0].food.label;
    })  
  }
}
