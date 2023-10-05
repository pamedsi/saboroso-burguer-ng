import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosingItemsComponent } from './choosing-items.component';

describe('MenuComponent', () => {
  let component: ChoosingItemsComponent;
  let fixture: ComponentFixture<ChoosingItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoosingItemsComponent]
    });
    fixture = TestBed.createComponent(ChoosingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
