import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPortionFormComponent } from './add-portion-form.component';

describe('AddPortionFormComponent', () => {
  let component: AddPortionFormComponent;
  let fixture: ComponentFixture<AddPortionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPortionFormComponent]
    });
    fixture = TestBed.createComponent(AddPortionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
