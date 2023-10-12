import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {OrderService} from "../../../services/OrderService";
import {ClientOrder} from "../../../models/ClientOrder";
import {UserService} from "../../../services/UserService";
import {UserClientDTO} from "../../../models/UserClientDTO";
import {IUserInfoState} from "../../../models/IUserInfoState";

interface UserName {
  stringName: string,
  finishedTypingName: boolean
}

@Component({
  selector: 'app-contact-and-address',
  templateUrl: './contact-and-address.component.html',
  styleUrls: ['./contact-and-address.component.css']
})
export class ContactAndAddressComponent {

  state!: IUserInfoState
  protected readonly IUserInfoState = IUserInfoState;

  ddd!: string;
  phoneNumber!: string;
  name: UserName
  address!: string
  order!: ClientOrder

  userFound: UserClientDTO | null

  constructor(private orderService: OrderService, private userService: UserService) {
    this.userFound = null

    this.name = {
      stringName: '',
      finishedTypingName: false
    } as UserName
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

  confirmPhoneNumber(){
    const phoneNumber = this.ddd + this.phoneNumber.replace('-', '')
    if (phoneNumber.length !== 11) {
      console.info("Número de celular inválido!")
      return
    }

    this.userService.getUserByPhoneNumber(phoneNumber).subscribe(user => {
      this.userFound = user

      if(!user) this.state = IUserInfoState.FIRST_TIME_ORDERING
      else if (!user.addresses.length) this.state = IUserInfoState.USER_WITH_NO_ADDRESS
      else this.state = IUserInfoState.USER_WITH_ADDRESS
    })
    document.getElementById('phone-number')!.blur();
  }

  getAddresses(){

  }

  confirmOrder() {

  }

  confirmName() {
    if(this.name.stringName.length >= 2) {
      this.name.finishedTypingName = true
      document.getElementById('name')!.blur();
    }
    else console.info('Nome inválido! Digite pelo menos duas letras.')
  }
}
