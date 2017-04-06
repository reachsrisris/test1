/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NextPageComponent } from './next-page.component';

describe('NextPageComponent', () => {
  let component: NextPageComponent;
  let fixture: ComponentFixture<NextPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});