import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'sponsors',
  templateUrl: './sponsors.page.html',
  styleUrls: ['./sponsors.page.scss'],
})
export class SponsorsPage {

  sponsors: any;

  constructor(
    public confData: ConferenceData
  ) { }

  ionViewDidEnter() {
    this.confData.getSponsors().subscribe((sponsors: any[]) => {
      this.sponsors = sponsors;
    });
  }
}
