
import { Action } from "redux";
import { CalcTypeEn, LastChange } from "./store";


export enum ActionEnum {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
    SET_NAME = 'SET_NAME',

    SETFAST = 'SET_FAST',
    SET_PREMIUM = 'SET_PREMIUM',
    SET_FROM_VAL = 'SET_FROM_VAL',
    SET_TO_VAL = 'SET_TO_VAL',
    SET_FROM_TYPE = 'SET_FROM_TYPE',
    SET_TO_TYPE = 'SET_TO_TYPE',
    SET_LAST_CHANGE = 'SET_LAST_CHANGE',
    SET_LAST_CALC = 'SET_LAST_CALC',

    GO_CALC = 'GO_CALC',
}

interface BaseFieldAction extends Action<ActionEnum> {
    type: ActionEnum
}

export interface GoCalcAction extends BaseFieldAction {
    type: ActionEnum.GO_CALC;
//    val: boolean;
}

export interface SetLastCalcAction extends BaseFieldAction {
    type: ActionEnum.SET_LAST_CALC;
    val: CalcTypeEn;
}

export interface SetLastChangeAction extends BaseFieldAction {
    type: ActionEnum.SET_LAST_CHANGE;
    val: LastChange;
}

export interface SetToTypeAction extends BaseFieldAction {
    type: ActionEnum.SET_TO_TYPE;
    val: number;
}

export interface SetFromTypeAction extends BaseFieldAction {
    type: ActionEnum.SET_FROM_TYPE;
    val: number;
}

export interface SetToValAction extends BaseFieldAction {
    type: ActionEnum.SET_TO_VAL;
    val: number;
}

export interface SetFromValAction extends BaseFieldAction {
    type: ActionEnum.SET_FROM_VAL;
    val: number;
}


export interface SetPremiumAction extends BaseFieldAction {
    type: ActionEnum.SET_PREMIUM;
    isPremium: boolean;
}

export interface SetFastAction extends BaseFieldAction {
    type: ActionEnum.SETFAST;
    isFast: boolean;
}

export interface IncrementCounterAction extends BaseFieldAction {
    type: ActionEnum.INCREMENT_COUNTER;
}

export interface SetNameAction extends BaseFieldAction {
    type: ActionEnum.SET_NAME;
    payload: string;
}

export type FieldAction = IncrementCounterAction | SetNameAction | SetFastAction |
    SetPremiumAction | SetFromValAction | SetToValAction | SetFromTypeAction
    | SetToTypeAction | SetLastChangeAction | SetLastCalcAction
    | GoCalcAction;

 export const createGoCalcAction=():GoCalcAction=>({
        type: ActionEnum.GO_CALC,

});   
   
export const createLastCalcAction=(src:CalcTypeEn):SetLastCalcAction=>({
        type: ActionEnum.SET_LAST_CALC,
        val: src
}); 

export const createLastChangeAction=(src:LastChange):SetLastChangeAction=>({
        type: ActionEnum.SET_LAST_CHANGE,
        val: src
});    

export const createSetToTypeAction=(src:number):SetToTypeAction=>({
        type: ActionEnum.SET_TO_TYPE,
        val: src
});    
export const createSetFromTypeAction=(src:number):SetFromTypeAction=>({
        type: ActionEnum.SET_FROM_TYPE,
        val: src
});

export const createSetToValAction=(src:number):SetToValAction=>({
        type: ActionEnum.SET_TO_VAL,
        val: src
});

export const createSetFromValAction=(src:number):SetFromValAction=>({
        type: ActionEnum.SET_FROM_VAL,
        val: src
});

export const createSetPremiumAction=(src:boolean):SetPremiumAction=>({
    type: ActionEnum.SET_PREMIUM,
    isPremium: src
});

export const createSetFastAction=(src:boolean):SetFastAction=>({
    type: ActionEnum.SETFAST,
    isFast: src
});

export const createIncrementCounterAction=():IncrementCounterAction=>{
    console.log('createIncrementCounterAction');
    return ({ 
    type: ActionEnum.INCREMENT_COUNTER,
    });
};

export const createSetNameAction=(name: string):SetNameAction=>({
    type: ActionEnum.SET_NAME,
    payload: name
});


