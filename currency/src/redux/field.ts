import { Action } from "redux";

export interface FieldState {
    value: string;
    focus: boolean;
}

const initialState: FieldState = {
    value: '',
    focus: false
}

enum FieldActionType {
    SET = 'field/SET',
    FOCUS = 'field/FOCUS',
    BLUR = 'field/BLUR',
}

interface BaseFieldAction extends Action<FieldActionType> {
    type: FieldActionType
}

export interface SetAction extends BaseFieldAction {
    type: FieldActionType.SET;
    payload: string;
}

export interface FocusAction extends BaseFieldAction {
    type: FieldActionType.FOCUS;
}

export interface BlurAction extends BaseFieldAction {
    type: FieldActionType.BLUR;
}

type FieldAction = SetAction | FocusAction | BlurAction;

export default function reducer(state: FieldState = initialState, action: FieldAction): FieldState {
    switch (action.type) {
        case FieldActionType.SET:
            return {
                ...state,
                value: action.payload
            }
        case FieldActionType.FOCUS:
            return {
                ...state,
                focus: true,
            }
        case FieldActionType.BLUR:
            return {
                ...state,
                focus: false,
            }
    }
}

export const set = (payload: string): SetAction => ({
    type: FieldActionType.SET,
    payload
})

export const focus = (): FocusAction => ({ type: FieldActionType.FOCUS });

export const blur = (): BlurAction => ({ type: FieldActionType.BLUR });