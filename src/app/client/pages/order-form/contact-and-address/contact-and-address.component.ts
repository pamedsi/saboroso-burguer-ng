import {Component} from '@angular/core';
import {phone} from 'phone'

import {OrderService} from "../../../services/OrderService";
import {ClientOrder} from "../../../models/ClientOrder";
import {UserService} from "../../../services/UserService";
import {UserClientDTO} from "../../../models/UserClientDTO";
import {IUserInfoState} from "../../../models/IUserInfoState";
import {Router} from "@angular/router";
import {DrinkAndQuantity, OrderDTO} from "../../../models/OrderDTO";
import {PurchasedBurgerDTO} from "../../../models/PurchasedBurgerDTO";
import {PurchasedPortionDTO} from "../../../models/PurchasedPortionDTO";
import {IPaymentMethod} from "../../../../shared/models/IPaymentMethod";
import {IOrderStatus} from "../../../../shared/models/IOrderStatus";

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

  ddd = ''
  phoneNumber = ''
  name: UserName
  chosenAddress = ''
  order!: ClientOrder

  userFound: UserClientDTO | null
  sameAddress: boolean | undefined
  newAddress = ''
  showButtonForConfirmOrder!: boolean


  constructor(private orderService: OrderService, private userService: UserService, private router: Router) {
    this.userFound = null

    this.name = {
      stringName: '',
      finishedTypingName: false
    } as UserName
  }

  ngOnInit() {
    this.orderService.currentOrder.subscribe(order => this.order = order)
  }

  numberOnly(pressedKey: KeyboardEvent) {
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
    if (this.phoneNumber.length < 10) return

    const phoneNumber =this.ddd + this.phoneNumber.replace('-', '')
    const {isValid} = phone( '+55' + phoneNumber)
    if (!isValid) {
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

  confirmOrder() {
      if (this.userFound) {
        this.order.clientName = this.userFound.name
        this.order.clientPhoneNumber = this.userFound.phoneNumber
      }
      else {
        this.order.clientName = this.name.stringName
        this.order.clientPhoneNumber = this.ddd + this.phoneNumber
      }
      if (this.sameAddress) {
        this.order.addressToDeliver = this.userFound!.addresses[0]
      }
      else if (!this.chosenAddress && this.chosenAddress !== 'new'){
        this.order.addressToDeliver = this.chosenAddress
      }
      else if (this.chosenAddress === 'new'){
        this.order.addressToDeliver = this.newAddress
      }

      this.order.orderCode = this.orderService.generateOrderCode()
      this.orderService.changeOrder(this.order)
      this.finishOrder()
  }

  confirmName() {
    if(this.name.stringName.length >= 2) {
      this.name.finishedTypingName = true
      document.getElementById('name')!.blur();
    }
    else console.info('Nome inválido! Digite pelo menos duas letras.')
  }

  updateButtonVisibility(value: boolean) {
    this.showButtonForConfirmOrder = value
  }

  toOrderDTO (): OrderDTO {
    return {
      orderCode: this.order.orderCode,
      status: IOrderStatus.IN_QUEUE,

      clientName: this.order.clientName,
      clientPhoneNumber: this.order.clientPhoneNumber,
      addressToDeliver: this.order.addressToDeliver,

      burgers: this.order.burgers.map(burger => {
        return {
          identifier: burger.getIdentifier(),
          addOnsIdentifiers: burger.getAddOns().map(addOn => addOn.getIdentifier()),
          breadIdentifier: burger.getBread()!.identifier,
          comboIdentifier: burger.getCombo() ? burger.getCombo()!.getIdentifier() : null,
          obs: burger.getObs() ?? null,
          itemSoldBy: burger.getPurchasePrice().totalValue
        } as PurchasedBurgerDTO
      }),
      portions: this.order.portions.map(portion => {
        return {
          identifier: portion.getIdentifier(),
          addOnsIdentifiers: portion.getAddOns().map(addOn => addOn.getIdentifier()),
          obs: portion.getObs() ?? null,
          itemSoldBy: portion.getPurchasePrice().totalValue
        } as PurchasedPortionDTO
      }),
      drinks: this.countDrinksForDTO(),
      paymentMethod: this.order.paymentMethod,
      howClientWillPay: this.order.paymentMethod === IPaymentMethod.HYBRID ? this.order.howClientWillPay : null,
      totalToPay: this.order.totalToPay
    } as OrderDTO
  }

  finishOrder(){
    const successful = (response: any) => {
      sessionStorage.setItem('order-made-successfully', "true")
      this.router.navigate!(['/order-confirmation'])
    }
    const error = (response: any) => {
      console.info(response)
      // console.log(JSON.stringify(this.toOrderDTO()))
      // Provavelmente vai ser porque algum produto ta em falta, aí vai pedir pra voltar e alterar o pedido.
    }

    this.orderService.makeOrder(this.toOrderDTO()).subscribe(successful, error)
  }

  countDrinksForDTO(): DrinkAndQuantity[]{
    const drinksAndQuantities: DrinkAndQuantity[] = []

    this.order.drinks.forEach(drink => {
      const index = drinksAndQuantities.findIndex((countedDrink) => countedDrink.drinkIdentifier === drink.getIdentifier())
      if(index !== -1) drinksAndQuantities[index].quantity++
      else {
        drinksAndQuantities.push(
          {
            drinkIdentifier: drink.getIdentifier(),
            quantity: 1
          }
        )
      }
    })

    return drinksAndQuantities
  }
}
