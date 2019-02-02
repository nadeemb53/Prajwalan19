import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage {

  gallery: any;

  constructor(
    public confData: ConferenceData
  ) { }

  ionViewDidEnter() {
    this.confData.getGallery().subscribe((gallery: any[]) => {
      this.gallery = gallery;
    });
  }

}
