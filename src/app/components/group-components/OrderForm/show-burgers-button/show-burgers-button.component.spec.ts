import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBurgersButtonComponent } from './show-burgers-button.component';

describe('ShowBurgersButtonComponent', () => {
  let component: ShowBurgersButtonComponent;
  let fixture: ComponentFixture<ShowBurgersButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBurgersButtonComponent]
    });
    fixture = TestBed.createComponent(ShowBurgersButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
