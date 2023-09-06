import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortionListForManagementComponent } from './portion-list-for-management.component';

describe('PortionListForManagementComponent', () => {
  let component: PortionListForManagementComponent;
  let fixture: ComponentFixture<PortionListForManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortionListForManagementComponent]
    });
    fixture = TestBed.createComponent(PortionListForManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
