import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnsManagementComponent } from './add-ons-management.component';

describe('AddOnsManagementComponent', () => {
  let component: AddOnsManagementComponent;
  let fixture: ComponentFixture<AddOnsManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOnsManagementComponent]
    });
    fixture = TestBed.createComponent(AddOnsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
