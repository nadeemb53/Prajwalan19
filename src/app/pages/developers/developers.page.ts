import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
})
export class DevelopersPage {

  developers: any[] = [];

  constructor(
    private confData: ConferenceData
  ) {
  }

  ionViewDidEnter() {
    this.confData.getDevelopers().subscribe((developers: any[]) => {
      this.developers = developers;
    });
  }

}
