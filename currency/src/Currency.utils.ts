
/**
 * Код валюты в ISO 4217
 * https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B4%D1%8B_%D0%B8_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D1%8B_%D0%B2%D0%B0%D0%BB%D1%8E%D1%82#%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2
 */
 export type CurrencySymbol = string;

export interface CurrencyVal{
 value: number;
 valType: number;
}

export interface ICurrencyOptions {
    premium: boolean;
    fast: boolean;
}

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
        return amount*2;
}


export interface ISdelkaData{
    from: CurrencySymbol,
    to: CurrencySymbol,
    amount: number,
    options: ICurrencyOptions,
} 

/**
 * Список доступных валют
 * @returns 
 */
export function getKnownCurrencies(): CurrencySymbol[] {
    return ['BTC', 'USDT', 'ETH', 'RUB'];
}