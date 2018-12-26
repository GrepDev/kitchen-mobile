import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {
  public vegan = false;
  private db : SQLiteObject; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('create table foodPrefs(name VARCHAR(32))', [])
        db.executeSql('CREATE TABLE PREFS (ID VARCHAR(32), PREFNAME VARCHAR(32), PREFVALUE(32))')
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
          this.db = db;
      })
      .catch(e => console.log(e));
  }

  isVegan(){
    if(this.vegan){
      this.db.executeSql('insert into foodPrefs (PREFNAME, PREFVALUE) VALUES("Vegan", 1))');
      console.log('Executed SQL');
    }
    else{
      this.db.executeSql('update foodPrefs SET PREFVALUE=0 where PREFNAME = "Vegan"');
      console.log('Executed SQL');
    }
  }

}
