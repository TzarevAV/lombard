import { CurrencySymbol, getKnownCurrencies, ICurrencyConvertData, ICurrencyOptions } from "./Currency.utils";
import { CalcTypeEn, FieldState, LastChange } from "./redux";


/**
 * Функция ковертации валюты
 * @param from Исходная валюта
 * @param to Целевая валюта
 * @param amount {float} Сумма в исходной валюте (в основных единицах валюты)
 * @param options
 * @returns Результат конвертации в целевой валюте (в основных единицах валюты)
 */
export function calculateExchange(
    from: CurrencySymbol,
    to: CurrencySymbol,
    amount: number,
    options: ICurrencyOptions
    ): number {
        console.log('calculateExchange');
        return amount*2;
}

export function testOnCalc(state: FieldState, lastChange:LastChange, lastCalc:CalcTypeEn):{calcType:CalcTypeEn, val:number} {
    console.log('testOnCalc');
    const data: ICurrencyConvertData={
        from: {valType:state.fromType, value: state.fromVal},
        to: {valType:state.toType, value: state.toVal},
        options: {fast: state.isFast, premium: state.isPremium},
    };
    
    if(lastChange===LastChange.IsFromVal 
       || lastChange===LastChange.IsOptions
       || (lastChange===LastChange.IsFromType && (lastCalc===CalcTypeEn.IsNone || lastCalc===CalcTypeEn.IsFromTo))
       || (lastChange===LastChange.IsToType && (lastCalc===CalcTypeEn.IsNone || lastCalc===CalcTypeEn.IsFromTo))
       ){
        const rs=calculateExchange(getKnownCurrencies()[data.from.valType], 
        getKnownCurrencies()[data.to.valType],
        data.from.value,
        data.options
      );
      return {calcType: CalcTypeEn.IsFromTo, val: rs};
    }
    if(lastChange===LastChange.IsToVal
      || (lastChange===LastChange.IsFromType && lastCalc===CalcTypeEn.IsToFrom)
      || (lastChange===LastChange.IsToType && lastCalc===CalcTypeEn.IsToFrom)
      ){
      const rs=calculateExchange(getKnownCurrencies()[data.to.valType], 
      getKnownCurrencies()[data.from.valType],
      data.to.value,
      data.options
    );
      return {calcType: CalcTypeEn.IsToFrom, val: rs};
    }
    return {calcType: CalcTypeEn.IsNone, val: -1};
  }