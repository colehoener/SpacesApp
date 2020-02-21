import { Component, OnInit } from '@angular/core';
import { NavController,PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private nav:NavController,private popCtrl:PopoverController) { }

  ngOnInit() {

  }

  close()
  {
    this.popCtrl.dismiss();
  }
}
