import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBurgerFormComponent } from './add-burger-form.component';

describe('AddBurgerFormComponent', () => {
  let component: AddBurgerFormComponent;
  let fixture: ComponentFixture<AddBurgerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBurgerFormComponent]
    });
    fixture = TestBed.createComponent(AddBurgerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
