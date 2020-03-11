import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController,AlertController,PopoverController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: 'info.page.html',
  styleUrls: ['info.page.scss'],
})
export class InfoPage implements OnInit {
  state: any;
  constructor(private route: ActivatedRoute, private router: Router) {
      this.route.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
            this.state = this.router.getCurrentNavigation().extras.state;
          } else {
          	this.router.navigate(['/home']);
          }
      });
  }

  ngOnInit() {
    
  }
}
