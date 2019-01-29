import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonRouterOutlet, ActionSheetController, Platform } from '@ionic/angular';
import { ViewChild } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss'],
})
export class HomePage {

  updates: any[] = [];
  subscription: any;

  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    public platform: Platform,
    public router: Router
  ) {
    /*this.platform.backButton.subscribe(() => {
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop();
      } else if (this.router.url === '/LoginPage') {
        //this.platform.exitApp();
        navigator[‘app’].exitApp()
      } else {
        this.generic.showAlert("Exit", "Do you want to exit the app?", this.onYesHandler, this.onNoHandler, "backPress");
      }
    });*/
  }

  ionViewDidEnter() {
    this.confData.getUpdates().subscribe((updates: any[]) => {
      this.updates = updates;
    });
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
  });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
}

}

