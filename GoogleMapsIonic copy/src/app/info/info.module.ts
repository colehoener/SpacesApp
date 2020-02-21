import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { StarRatingModule } from 'ionic4-star-rating';


import { InfoPage } from './info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //StarRatingModule,
    RouterModule.forChild([
      {
        path: '',
        component: InfoPage
      }
    ])
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}
