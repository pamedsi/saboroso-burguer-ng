import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComboFormComponent } from './add-combo-form.component';

describe('AddComboFormComponent', () => {
  let component: AddComboFormComponent;
  let fixture: ComponentFixture<AddComboFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddComboFormComponent]
    });
    fixture = TestBed.createComponent(AddComboFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
