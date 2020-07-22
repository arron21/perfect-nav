import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPerfectNavComponent } from './ng-perfect-nav.component';

describe('NgPerfectNavComponent', () => {
  let component: NgPerfectNavComponent;
  let fixture: ComponentFixture<NgPerfectNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPerfectNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPerfectNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
