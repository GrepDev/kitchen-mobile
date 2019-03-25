import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { IngredientsPage } from '../pages/ingredients/ingredients';
import RecipesPage from '../pages/recipes/recipes';
import {App} from 'ionic-angular';
import { HelpPage } from '../pages/help/help';
import { PreferencesPage } from './preferences/preferences';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  goToIngredients() {
    this.app.getRootNav().push(IngredientsPage);   
  }
  goToRecipes() {
    this.app.getRootNav().push(RecipesPage);
  }
  goToHelp() {
    this.app.getRootNav().push(HelpPage);
  }
  goToPrefs(){
    this.app.getRootNav().push(PreferencesPage);
  }
}

