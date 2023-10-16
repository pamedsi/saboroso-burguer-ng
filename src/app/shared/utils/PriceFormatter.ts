import { CurrencyPipe } from '@angular/common';

export class WIthPriceFormatter {

  constructor(private currencyPipe: CurrencyPipe) {}

  formatPrice(price: number) {
      if (price < 10) {
        const stringToBeReturned = String(this.currencyPipe.transform(price, 'BRL', 'symbol', '1.2-2', 'pt-BR'));
        const characterToRepeat = stringToBeReturned[2]
        return stringToBeReturned.replace(characterToRepeat, characterToRepeat.repeat(3))
      }
      return String(this.currencyPipe.transform(price, 'BRL', 'symbol', '1.2-2', 'pt-BR'));
    }
}

// // Defina o mixin
// export function CurrencyFormatterMixin<T extends new (...args: any[]) => {}>(Base: T) {
//   return class extends Base {
//     currencyPipe = new CurrencyPipe('pt-BR');
//
//     formatPrice(price: number) {
//       return String(this.currencyPipe.transform(price, 'BRL', 'symbol', '1.2-2', 'pt-BR'));
//     }
//   };
// }
//
// // Use o mixin em suas classes
// class MyClass extends CurrencyFormatterMixin(OtherClass) {
//   constructor(...args: any[]) {
//     super(...args);
//     // Seu código aqui
//   }
// }
