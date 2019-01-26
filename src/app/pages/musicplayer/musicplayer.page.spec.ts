import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicplayerPage } from './musicplayer.page';

describe('MusicplayerPage', () => {
  let component: MusicplayerPage;
  let fixture: ComponentFixture<MusicplayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicplayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicplayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
