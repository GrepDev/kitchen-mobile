import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EdamamApiProvider } from '../../providers/edamam-api/edamam-api';
import { Storage } from '@ionic/storage';
import localForage from "localforage";
import { RecipesSingleton } from './recipesSingleton';

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
export default class RecipesPage {

  drawerOptions: any;

  public localStorage: LocalForage; 

  private TRUE_STRING = "true";

  public veganString: string = "Vegan";

  public vegetarianString: string = "Vegetarian";
  
  public glutenString: string = "Gluten";
  
  public lactoseString: string = "Lactose";

  public GLUTEN_STRING_EDAMAM: string = "Gluten-Free";

  public LACTOSE_STRING_EDAMAM: string = "Lactose-Free";

  private vegan: boolean = false;

  private vegetarian: boolean = false;
  
  private gluten: boolean = false;
  
  private lactose: boolean = false;

  private food = [];

  shownGroup = null;

  private MAXIMUM_RECIPES = 10;

  private MAXIMUM_RECIPES_REACHED_MESSAGE = "Maximum recipes reached! Delete some recipes to receive others."

  private initialRecipeRequest;

  private currentIngredients = [];

  private lastCharsSlice = -2;

  private firstCharsSlice = 0;

  private requestString;

  private defaultList = "defaultList";

  private recipesContainer = "recipesContainer";

  private hiddenString = "hidden";

  private visibleString = "visible";

  private alertCounter = 0; 

  private persistentRecipesList = RecipesSingleton.getInstance();

  constructor(public navCtrl: NavController, public navParams: NavParams, private edamamApiProvider: EdamamApiProvider, public storage: Storage) {
    
    this.drawerOptions = {
			handleHeight: 50,
			thresholdFromBottom: 200,
			thresholdFromTop: 200,
			bounceBack: true
    };
  }

  ionViewDidLoad() {
    this.getPreferencesFromStorage();

    this.storage.forEach((value, key, index) => {
      this.currentIngredients.push(value);})
  
  }

  ionViewDidLeave(){
    this.persistentRecipesList.setRecipesList(this.food);
    this.food = [];
  }

  ionViewWillEnter(){
    
    this.loadRecipes();
  }

  loadRecipes(){
    if(this.persistentRecipesList.getRecipesList().length > 0){
        this.addStoredRecipes(this.persistentRecipesList.getRecipesList());
    }
  }

  addStoredRecipes(data){
    for (var i = 0; i < data.length; i++) {
      if(this.food.length < this.MAXIMUM_RECIPES){
          if(this.checkForDuplicates(data[i])){
            this.food.push(data[i]);  
            }
        }
    }
    this.showResults();
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  createRequestString(){
    this.initialRecipeRequest = "&q=";
    for(let i = 0; i < this.currentIngredients.length; i++){
      this.initialRecipeRequest += this.currentIngredients[i] + ", ";
    }

    this.requestString = this.initialRecipeRequest.slice(this.firstCharsSlice,this.lastCharsSlice);
  }

  getRecipesData() {

    this.createRequestString();

    if(this.requestString != null){
    this.edamamApiProvider.getRecipesData(this.requestString).subscribe(data => {
      
    this.addRecipeToList(data);
      
    }
    )}
    this.showResults();

  }

  removeItem(item) {
    for (var i = 0; i < this.food.length; i++) {
      if (this.food[i] == item) {
        this.food.splice(i, 1);
      }
    }
  }

  getPreferencesFromStorage(){
    localForage.getItem(this.veganString).then((value)=>{ 
      if(value == this.TRUE_STRING){
        this.vegan = true;
      }
    })

    localForage.getItem(this.vegetarianString).then((value)=>{ 
      if(value == this.TRUE_STRING){
        this.vegetarian = true;
      }
    })

    localForage.getItem(this.glutenString).then((value)=>{ 
      if(value == this.TRUE_STRING){
        this.gluten = true;
      }
    })

    localForage.getItem(this.lactoseString).then((value)=>{ 
      if(value == this.TRUE_STRING){
        this.lactose = true;
      }
    })
  }

  checkPreferences(healthLabels:string[]){

    let mandatoryConditions = 0;
    let counter = 0;

    if(this.vegan){
      mandatoryConditions++; 
    }

    if(this.vegetarian){
      mandatoryConditions++;
    }

    if(this.gluten){
      mandatoryConditions++;
    }

    if(this.lactose){
      mandatoryConditions++;
    }

    for(let i = 0; i < healthLabels.length; i++){
      
        if(healthLabels[i] == this.veganString){
          counter++;
        }
      
        if(healthLabels[i] == this.vegetarianString){
          counter++;
        }
      
        if(healthLabels[i] == this.GLUTEN_STRING_EDAMAM){
          counter++;
        }

        if(healthLabels[i] == this.LACTOSE_STRING_EDAMAM){
          counter++;
        }
  }

  if(mandatoryConditions <= counter){
    return true;
  }
  else {
    return false;
  }
   
  }

  checkForDuplicates(data){
    if(this.food.length != 0) {
      for(var j = 0; j < this.food.length; j++){
          if(this.food[j].label == data.label){
            return false;
          }
        }
      }
      return true;
    }

    addRecipeToList(data){
      for (var i = 0; i < data.length; i++) {
        if(this.food.length < this.MAXIMUM_RECIPES){
          if(this.checkPreferences(data[i].healthLabels)){
            if(this.checkForDuplicates(data[i])){
              this.food.push(data[i]);  
            }
            else{ 
              this.edamamApiProvider.getMoreRecipesOfSameType(this.requestString).subscribe(data => {
              this.addMoreRecipesOfSameType(data);
              })
            }
          }
        }
        else{ 
          return 1;
        }
      }
    }

    addMoreRecipesOfSameType(data){
      for (var i = 0; i < data.length; i++) {
        if(this.food.length < this.MAXIMUM_RECIPES){
          if(this.checkPreferences(data[i].healthLabels)){
            if(this.checkForDuplicates(data[i])){
              this.food.push(data[i]);  
            }
          }
        }
        else{
          if(this.alertCounter == 0){
            alert(this.MAXIMUM_RECIPES_REACHED_MESSAGE);
            this.alertCounter++;
            break;
          }
          else{
            return 1;
          }
        }
      }
    }

  showResults(){
    document.getElementById(this.defaultList).style.visibility = this.hiddenString;
    document.getElementById(this.recipesContainer).style.visibility = this.visibleString;
  }
}