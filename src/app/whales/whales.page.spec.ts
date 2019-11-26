import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhalesPage } from './whales.page';

describe('WhalesPage', () => {
  let component: WhalesPage;
  let fixture: ComponentFixture<WhalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
