import { BrowserModule } from '../../node_modules/@angular/platform-browser'
import { ErrorHandler, NgModule } from '../../node_modules/@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from '../../node_modules/ionic-angular'
import { SplashScreen } from '../../node_modules/@ionic-native/splash-screen'
import { HttpModule, JsonpModule } from '../../node_modules/@angular/http'
import { StatusBar } from '../../node_modules/@ionic-native/status-bar'
import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { HelpPage } from '../pages/help/help'
import { IngredientsPage } from '../pages/ingredients/ingredients'
import RecipesPage from '../pages/recipes/recipes'
import { EdamamApiProvider } from '../providers/edamam-api/edamam-api'
import { File } from '../../node_modules/@ionic-native/file'
import { IonicStorageModule } from '../../node_modules/@ionic/storage'
import { PreferencesPage } from '../pages/preferences/preferences'
import { SQLite } from '../../node_modules/@ionic-native/sqlite'
import { NutritionCalculatorComponent } from '../components/nutrition-calculator/nutrition-calculator'
import { RecipesSingleton } from '../pages/recipes/recipesSingleton'
import { HelpModalPage } from './help-modal/help-modal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IngredientsPage,
    RecipesPage,
    HelpPage,
    PreferencesPage,
    NutritionCalculatorComponent,
    HelpModalPage
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
    HelpPage,
    PreferencesPage,
    HelpModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EdamamApiProvider,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    RecipesSingleton
  ]
})
export class AppModule {}