import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhalePage } from './whale.page';

describe('WhalePage', () => {
  let component: WhalePage;
  let fixture: ComponentFixture<WhalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhalePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
