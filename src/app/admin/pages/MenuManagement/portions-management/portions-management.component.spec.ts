import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortionsManagementComponent } from './portions-management.component';

describe('PortionsManagementComponent', () => {
  let component: PortionsManagementComponent;
  let fixture: ComponentFixture<PortionsManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortionsManagementComponent]
    });
    fixture = TestBed.createComponent(PortionsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
