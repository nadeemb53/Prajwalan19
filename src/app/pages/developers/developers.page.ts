import { Component } from '@angular/core';
// import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
})
export class DevelopersPage {

  developers: any[] = [];

  constructor(
   // public confData: ConferenceData
  ) {
  }

  ionViewDidEnter() {
    }
  }
