
import { Action } from "redux";

export enum ActionEnum {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
    SET_NAME = 'SET_NAME'
}

interface BaseFieldAction extends Action<ActionEnum> {
    type: ActionEnum
}

export interface IncrementCounterAction extends BaseFieldAction {
    type: ActionEnum.INCREMENT_COUNTER;
}

export interface SetNameAction extends BaseFieldAction {
    type: ActionEnum.SET_NAME;
    payload: string;
}

export type FieldAction = IncrementCounterAction | SetNameAction;

export const createIncrementCounterAction=():IncrementCounterAction=>({
    type: ActionEnum.INCREMENT_COUNTER,
});

export const createSetNameAction=(name: string):SetNameAction=>({
    type: ActionEnum.SET_NAME,
    payload: name
});


