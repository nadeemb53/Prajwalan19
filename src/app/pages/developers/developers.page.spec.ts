import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersPage } from './developers.page';

describe('DevelopersPage', () => {
  let component: DevelopersPage;
  let fixture: ComponentFixture<DevelopersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
