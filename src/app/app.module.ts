import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule, JsonpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HelpPage } from "../pages/help/help";
import { IngredientsPage } from '../pages/ingredients/ingredients';
import { RecipesPage } from '../pages/recipes/recipes';
import { EdamamApiProvider } from '../providers/edamam-api/edamam-api';
import { File } from '@ionic-native/file';
import { IonicStorageModule } from '@ionic/storage';
import { PreferencesPage } from '../pages/preferences/preferences';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IngredientsPage,
    RecipesPage,
<<<<<<< HEAD
    HelpPage,
    PreferencesPage
=======
    HelpPage
>>>>>>> 9a51fda9e509058793421725c9987548e9f5331b
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IngredientsPage,
    RecipesPage,
<<<<<<< HEAD
    HelpPage,
    PreferencesPage
=======
    HelpPage
>>>>>>> 9a51fda9e509058793421725c9987548e9f5331b
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EdamamApiProvider,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite  
  ]
})
export class AppModule {}