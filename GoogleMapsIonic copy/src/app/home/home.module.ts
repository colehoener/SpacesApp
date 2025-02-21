import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Geolocation } from  '@ionic-native/geolocation/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
	FormsModule,
	HttpClientModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  providers: [Geolocation, SQLite]
})
export class HomePageModule {}
