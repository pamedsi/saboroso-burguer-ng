import {Injectable} from "@angular/core";

@Injectable()
export class ItemsDetailsService {
  private orderState = {};

  setOrderState(state: any) {
    this.orderState = state;
  }

  getOrderState() {
    return this.orderState;
  }
}
