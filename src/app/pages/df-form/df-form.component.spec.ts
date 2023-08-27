/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DfFormComponent } from './df-form.component';

describe('DfFormComponent', () => {
  let component: DfFormComponent;
  let fixture: ComponentFixture<DfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
