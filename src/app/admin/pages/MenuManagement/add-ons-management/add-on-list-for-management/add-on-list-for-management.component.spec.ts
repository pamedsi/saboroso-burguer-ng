import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnListForManagementComponent } from './add-on-list-for-management.component';

describe('AddOnListForManagementComponent', () => {
  let component: AddOnListForManagementComponent;
  let fixture: ComponentFixture<AddOnListForManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOnListForManagementComponent]
    });
    fixture = TestBed.createComponent(AddOnListForManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
