import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubscritendComponent } from './list-subscritend.component';

describe('ListSubscritendComponent', () => {
  let component: ListSubscritendComponent;
  let fixture: ComponentFixture<ListSubscritendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSubscritendComponent]
    });
    fixture = TestBed.createComponent(ListSubscritendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
