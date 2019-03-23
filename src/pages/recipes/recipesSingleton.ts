import { Injectable } from "@angular/core";

@Injectable()
export class RecipesSingleton
{
    private static _instance:RecipesSingleton = new RecipesSingleton();
    private recipesList = [];

    public setRecipesList(recipes){
        this.recipesList = recipes;
    }

    public getRecipesList(){
        return this.recipesList;
    }

    constructor() {
        if(RecipesSingleton._instance){
            throw new Error("Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.");
        }
        RecipesSingleton._instance = this;
    }

    public static getInstance():RecipesSingleton
    {
        return RecipesSingleton._instance;
    }
}
