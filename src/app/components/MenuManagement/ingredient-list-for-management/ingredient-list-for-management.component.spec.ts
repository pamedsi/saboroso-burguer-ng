import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientListForManagementComponent } from './ingredient-list-for-management.component';

describe('IngredientListForManagementComponent', () => {
  let component: IngredientListForManagementComponent;
  let fixture: ComponentFixture<IngredientListForManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientListForManagementComponent]
    });
    fixture = TestBed.createComponent(IngredientListForManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
