import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsAndMenuButtonsComponent } from './highlights-and-menu-buttons.component';

describe('ButtonsContainerComponent', () => {
  let component: HighlightsAndMenuButtonsComponent;
  let fixture: ComponentFixture<HighlightsAndMenuButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightsAndMenuButtonsComponent]
    });
    fixture = TestBed.createComponent(HighlightsAndMenuButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
