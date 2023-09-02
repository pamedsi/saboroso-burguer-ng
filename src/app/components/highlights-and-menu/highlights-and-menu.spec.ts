import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsAndMenu } from './highlights-and-menu';

describe('OrderFromComponent', () => {
  let component: HighlightsAndMenu;
  let fixture: ComponentFixture<HighlightsAndMenu>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightsAndMenu]
    });
    fixture = TestBed.createComponent(HighlightsAndMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
