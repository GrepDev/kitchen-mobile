import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule, JsonpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegisterPage} from "../pages/register/register";
import { IngredientsPage } from '../pages/ingredients/ingredients';
<<<<<<< HEAD
=======
import { RecipesPage } from '../pages/recipes/recipes';
>>>>>>> 26edf66bdbc123ccdbfae338742fb65a9b83661b
import { EdamamApiProvider } from '../providers/edamam-api/edamam-api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    IngredientsPage
=======
    IngredientsPage,
    RecipesPage
>>>>>>> 26edf66bdbc123ccdbfae338742fb65a9b83661b
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    IngredientsPage
=======
    IngredientsPage,
    RecipesPage
>>>>>>> 26edf66bdbc123ccdbfae338742fb65a9b83661b
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EdamamApiProvider
  ]
})
export class AppModule {}
