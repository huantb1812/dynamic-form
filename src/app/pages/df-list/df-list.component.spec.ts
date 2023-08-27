/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DfListComponent } from './df-list.component';

describe('DfListComponent', () => {
  let component: DfListComponent;
  let fixture: ComponentFixture<DfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
