import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController,AlertController,PopoverController } from '@ionic/angular';
import {AboutPage} from '../about/about.page';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private popCtrl:PopoverController) {}
  
  async openAbout(ev: any)
  {
    const pop = await this.popCtrl.create({
        component: AboutPage,
        event: ev,
        translucent: true
    });
    return await pop.present();
  }
  ngOnInit() {
    
  }

}
