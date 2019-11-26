import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachingPage } from './beaching.page';

describe('BeachingPage', () => {
  let component: BeachingPage;
  let fixture: ComponentFixture<BeachingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
