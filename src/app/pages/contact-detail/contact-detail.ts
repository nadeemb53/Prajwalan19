import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html',
  styleUrls: ['./contact-detail.scss'],
})
export class ContactDetailPage {
  committee: any;

  constructor(
    private dataProvider: ConferenceData,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const committeeId = this.route.snapshot.paramMap.get('committeeId');
      if (data && data.committees) {
        for (const committee of data.committees) {
          if (committee && committee.id === committeeId) {
            this.committee = committee;
            break;
          }
        }
      }
    });
  }
}
