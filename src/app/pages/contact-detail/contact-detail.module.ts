import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailPage } from './contact-detail';
import { ContactDetailPageRoutingModule } from './contact-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ContactDetailPageRoutingModule
  ],
  declarations: [
    ContactDetailPage,
  ]
})
export class ContactDetailModule { }
