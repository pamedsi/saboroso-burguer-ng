import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosManagementComponent } from './combos-management.component';

describe('CombosManagementComponent', () => {
  let component: CombosManagementComponent;
  let fixture: ComponentFixture<CombosManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombosManagementComponent]
    });
    fixture = TestBed.createComponent(CombosManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
