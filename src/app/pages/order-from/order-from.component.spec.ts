import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFromComponent } from './order-from.component';

describe('OrderFromComponent', () => {
  let component: OrderFromComponent;
  let fixture: ComponentFixture<OrderFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderFromComponent]
    });
    fixture = TestBed.createComponent(OrderFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
