import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileBuyerComponent } from './view-profile-buyer.component';

describe('ViewProfileBuyerComponent', () => {
  let component: ViewProfileBuyerComponent;
  let fixture: ComponentFixture<ViewProfileBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProfileBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfileBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
