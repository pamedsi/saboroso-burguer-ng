import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightBurgersComponent } from './highlight-burgers.component';

describe('HighlightBurgersComponent', () => {
  let component: HighlightBurgersComponent;
  let fixture: ComponentFixture<HighlightBurgersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightBurgersComponent]
    });
    fixture = TestBed.createComponent(HighlightBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
