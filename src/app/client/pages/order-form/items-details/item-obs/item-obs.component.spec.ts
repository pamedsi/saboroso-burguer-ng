import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemObsComponent } from './item-obs.component';

describe('ItemObsComponent', () => {
  let component: ItemObsComponent;
  let fixture: ComponentFixture<ItemObsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemObsComponent]
    });
    fixture = TestBed.createComponent(ItemObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
