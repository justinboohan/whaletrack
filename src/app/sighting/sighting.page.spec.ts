import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SightingPage } from './sighting.page';

describe('SightingPage', () => {
  let component: SightingPage;
  let fixture: ComponentFixture<SightingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SightingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SightingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
