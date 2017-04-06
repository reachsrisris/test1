/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelloSriComponent } from './hello-sri.component';

describe('HelloSriComponent', () => {
  let component: HelloSriComponent;
  let fixture: ComponentFixture<HelloSriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloSriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloSriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});