import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFundsComponent } from './list-funds.component';

describe('ListFundsComponent', () => {
  let component: ListFundsComponent;
  let fixture: ComponentFixture<ListFundsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFundsComponent]
    });
    fixture = TestBed.createComponent(ListFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
