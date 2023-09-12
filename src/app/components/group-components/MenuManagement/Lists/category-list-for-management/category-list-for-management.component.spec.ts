import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListForManagementComponent } from './category-list-for-management.component';

describe('CategoryListForManagementComponent', () => {
  let component: CategoryListForManagementComponent;
  let fixture: ComponentFixture<CategoryListForManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryListForManagementComponent]
    });
    fixture = TestBed.createComponent(CategoryListForManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
