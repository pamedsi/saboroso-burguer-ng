import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnAddOnChooseComponent } from './on-add-on-choose.component';

describe('OnAddOnChooseComponent', () => {
  let component: OnAddOnChooseComponent;
  let fixture: ComponentFixture<OnAddOnChooseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnAddOnChooseComponent]
    });
    fixture = TestBed.createComponent(OnAddOnChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
