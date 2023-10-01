import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboListForManagementComponent } from './combo-list-for-management.component';

describe('ComboListForManagementComponent', () => {
  let component: ComboListForManagementComponent;
  let fixture: ComponentFixture<ComboListForManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComboListForManagementComponent]
    });
    fixture = TestBed.createComponent(ComboListForManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
