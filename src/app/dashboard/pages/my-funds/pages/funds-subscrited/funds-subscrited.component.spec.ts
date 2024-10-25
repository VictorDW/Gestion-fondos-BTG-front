import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsSubscritedComponent } from './funds-subscrited.component';

describe('FundsSubscritedComponent', () => {
  let component: FundsSubscritedComponent;
  let fixture: ComponentFixture<FundsSubscritedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundsSubscritedComponent]
    });
    fixture = TestBed.createComponent(FundsSubscritedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
