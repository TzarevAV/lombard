export enum CalcTypeEn{
    IsNone=0,
    IsFromTo,
    IsToFrom,
  }

export enum LastChange{
    IsNone=0,
    IsFromVal,
    IsFromType,
    IsToVal,
    IsToType,
    IsOptions,
  }

export interface FieldState {
    counter: number,
    name: string

    isFast:boolean,
    isPremium: boolean,
    fromVal: number,
    toVal: number,
    fromType: number,
    toType: number,
    lastChange: LastChange,
    lastCalcType: CalcTypeEn,

    isToCalc: boolean,   
}

export const initialState: FieldState = {
    counter: 0,
    name: 'test start',

    isFast: false,
    isPremium: false,
    fromVal: 0,
    toVal: 0,
    fromType: 1,
    toType: 1,
    lastChange:LastChange.IsNone,
    lastCalcType: CalcTypeEn.IsNone,

    isToCalc: false,
}
