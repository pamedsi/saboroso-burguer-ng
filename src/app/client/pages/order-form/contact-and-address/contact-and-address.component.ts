import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../services/OrderService";
import {ClientOrder} from "../../../models/ClientOrder";

@Component({
  selector: 'app-contact-and-address',
  templateUrl: './contact-and-address.component.html',
  styleUrls: ['./contact-and-address.component.css']
})
export class ContactAndAddressComponent implements OnInit{
  ddd!: string;
  phoneNumber!: string;
  address!: string
  order!: ClientOrder

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.currentOrder.subscribe(order => this.order = order)
  }

  numberOnly(pressedKey: KeyboardEvent, id: string) {
    const key = pressedKey.key;
    if (key !== 'Backspace' && isNaN(Number(key))) {
      pressedKey.preventDefault();
    }

    document.getElementById('ddd')!.addEventListener('keyup', (event) => {
      const input = event.target as HTMLInputElement;
      if (input.value.length >= 2) {
        document.getElementById('phone-number')!.focus();
      }
    });
  }

  formatPhoneNumber() {
    let phoneNumber = this.phoneNumber;
    if (phoneNumber.length === 5) phoneNumber = phoneNumber.slice(0, 5) + '-' + phoneNumber.slice(5);
    this.phoneNumber = phoneNumber;
  }

  confirmOrder(){

  }

}
