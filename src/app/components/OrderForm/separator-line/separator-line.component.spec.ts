import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorLineComponent } from './separator-line.component';

describe('SeparatorLineComponent', () => {
  let component: SeparatorLineComponent;
  let fixture: ComponentFixture<SeparatorLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeparatorLineComponent]
    });
    fixture = TestBed.createComponent(SeparatorLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
