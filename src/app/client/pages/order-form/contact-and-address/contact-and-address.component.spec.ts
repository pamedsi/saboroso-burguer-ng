import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAndAddressComponent } from './contact-and-address.component';

describe('ContactAndAddressComponent', () => {
  let component: ContactAndAddressComponent;
  let fixture: ComponentFixture<ContactAndAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactAndAddressComponent]
    });
    fixture = TestBed.createComponent(ContactAndAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
