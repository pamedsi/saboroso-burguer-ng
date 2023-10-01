import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrinkFormComponent } from './add-drink-form.component';

describe('AddDrinkFormComponent', () => {
  let component: AddDrinkFormComponent;
  let fixture: ComponentFixture<AddDrinkFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDrinkFormComponent]
    });
    fixture = TestBed.createComponent(AddDrinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
