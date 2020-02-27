import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBuyerComponent } from './login-buyer.component';

describe('LoginBuyerComponent', () => {
  let component: LoginBuyerComponent;
  let fixture: ComponentFixture<LoginBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
