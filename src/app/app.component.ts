import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Events, MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { UserData } from './providers/user-data';
import { AppRate } from '@ionic-native/app-rate/ngx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Workshops',
      url: '/app/tabs/schedule',
      icon: 'calendar'
    },
    {
      title: 'Events',
      url: '/app/tabs/speakers',
      icon: 'contacts'
    },
    {
      title: 'Map',
      url: '/app/tabs/map',
      icon: 'map'
    },
    {
      title: 'Contact',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ];
  loggedIn = false;

  constructor(
    private events: Events,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    public oneSignal: OneSignal,
    private appRate: AppRate,
    private userData: UserData
  ) {
    this.initializeApp();
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#F89321');
    this.appRate.preferences = {
      usesUntilPrompt: 2,
      storeAppURL: {
       android: 'market://details?id=com.nadeem.prajwalan'
      },
      customLocale: {
        title: 'Are you enjoying our App?',
        message: 'If you enjoy using Prajwalan 19 App, would you mind taking a moment to rate it? Thanks so much!',
        cancelButtonLabel: 'No, Thanks',
        laterButtonLabel: 'Remind Me Later',
        rateButtonLabel: 'Rate It Now'
      }
    };
    this.appRate.promptForRating(false);
  }

  ngOnInit() {
    this.checkLoginStatus();
    this.listenForLoginEvents();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initializeOneSignal();
    });
  }

  initializeOneSignal() {
    this.oneSignal.startInit('148543bb-d4c6-4fe7-8ef4-4c6f21f0df86', '268887942654');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
    // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe((jsonData) => {

    });

    this.oneSignal.endInit();

  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/app/tabs/schedule');
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
