import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAddOnFormComponent } from './create-add-on-form.component';

describe('CreateAddOnFormComponent', () => {
  let component: CreateAddOnFormComponent;
  let fixture: ComponentFixture<CreateAddOnFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAddOnFormComponent]
    });
    fixture = TestBed.createComponent(CreateAddOnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
