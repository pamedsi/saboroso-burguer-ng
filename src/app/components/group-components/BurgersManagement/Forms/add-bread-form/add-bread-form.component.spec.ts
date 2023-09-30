import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBreadFormComponent } from './add-bread-form.component';

describe('AddBreadFormComponent', () => {
  let component: AddBreadFormComponent;
  let fixture: ComponentFixture<AddBreadFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBreadFormComponent]
    });
    fixture = TestBed.createComponent(AddBreadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
