import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPerfectNavComponent } from './ngx-perfect-nav.component';

describe('NgxPerfectNavComponent', () => {
  let component: NgxPerfectNavComponent;
  let fixture: ComponentFixture<NgxPerfectNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPerfectNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPerfectNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
