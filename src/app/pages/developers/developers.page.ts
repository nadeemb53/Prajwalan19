import { Component } from '@angular/core';
// import { ConferenceData } from '../../providers/conference-data';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
})
export class DevelopersPage {

  developers: any[] = [];

  constructor(
   // public confData: ConferenceData
   public IAB: InAppBrowser,
    public AppAvail: AppAvailability,
  ) {
  }

  ionViewDidEnter() {

    }

    launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
      let app: string;
        app = androidPackageName;
      this.AppAvail.check(app).then(
        () => { // success callback
         this.IAB.create(appUrl + username, '_system');
         console.log('app opened');
        },
        (data) => { // error callback

        this.IAB.create(httpUrl + username, '_system');
         console.log('ERROR');
         console.log(data);
        }
      );
    }

    openLinkedIn(username: string) {
      this.launchExternalApp('linkedin://', 'com.linkedin.android', 'linkedin://user?username=', 'https://www.linkedin.com/in/', username);
    }
  }
