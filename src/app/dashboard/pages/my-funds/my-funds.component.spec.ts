import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFundsComponent } from './my-funds.component';

describe('MyFundsComponent', () => {
  let component: MyFundsComponent;
  let fixture: ComponentFixture<MyFundsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFundsComponent]
    });
    fixture = TestBed.createComponent(MyFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
