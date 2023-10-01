import { CurrencyPipe } from '@angular/common';

export class WIthPriceFormatter {

  constructor(private currencyPipe: CurrencyPipe) {}

  formatPrice(price: number) {
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
