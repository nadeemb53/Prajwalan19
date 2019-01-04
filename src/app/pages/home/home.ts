import { Component, ViewEncapsulation } from '@angular/core';
/*import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../about-popover/about-popover';
import { Component, ViewEncapsulation } from '@angular/core';*/
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss'],
})
export class HomePage {
  /*conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }*/

  committees: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    public router: Router
  ) {}

  ionViewDidEnter() {
  }

}

