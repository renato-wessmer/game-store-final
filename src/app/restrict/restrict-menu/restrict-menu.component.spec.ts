import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictMenuComponent } from './restrict-menu.component';

describe('RestrictMenuComponent', () => {
  let component: RestrictMenuComponent;
  let fixture: ComponentFixture<RestrictMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestrictMenuComponent]
    });
    fixture = TestBed.createComponent(RestrictMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
