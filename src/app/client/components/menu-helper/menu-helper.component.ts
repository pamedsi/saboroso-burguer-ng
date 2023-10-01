import {Component, Input} from '@angular/core';
import {WIthPriceFormatter} from "../../../shared/utils/PriceFormatter";
import {MenuItem} from "../../factories/Menu/MenuItem";
import {ComboForMenu} from "../../factories/Menu/ComboForMenu";
import {AddOnForMenu} from "../../factories/Menu/AddOnForMenu";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-menu-helper',
  templateUrl: './menu-helper.component.html',
  styleUrls: ['./menu-helper.component.css']
})
export class MenuHelperComponent extends WIthPriceFormatter{
  @Input() listTitle!: string
  @Input() itemList!: (AddOnForMenu | ComboForMenu)[]

  constructor(currencyPipe: CurrencyPipe) {
    super(currencyPipe);
  }

  hasDescription(item: any): boolean {
    try {
      return Boolean(item.getDescription())
    }
    catch (error){
      return false
    }
  }

  comboCaster(item: MenuItem) {
    return item as ComboForMenu
  }
}
