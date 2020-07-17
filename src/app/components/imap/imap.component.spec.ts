import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImapComponent } from './imap.component';

describe('ImapComponent', () => {
  let component: ImapComponent;
  let fixture: ComponentFixture<ImapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImapComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
