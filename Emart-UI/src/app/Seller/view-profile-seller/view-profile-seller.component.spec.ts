import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileSellerComponent } from './view-profile-seller.component';

describe('ViewProfileSellerComponent', () => {
  let component: ViewProfileSellerComponent;
  let fixture: ComponentFixture<ViewProfileSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProfileSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfileSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
