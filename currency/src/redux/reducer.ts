
import { testOnCalc } from "../logic";
import { ActionEnum, FieldAction } from "./actions";
import { CalcTypeEn, FieldState, initialState, LastChange } from "./store";

export const reducer = (state: FieldState = initialState, action: FieldAction) => {
    console.log('reducer ');
    switch (action.type) {
        case ActionEnum.INCREMENT_COUNTER:
            console.log('counter ' + state.counter);
            return {
                ...state,
                counter: state.counter
            }
        case ActionEnum.SET_NAME:
            return {
                ...state,
                name: action.payload,
            }
        case ActionEnum.SETFAST:
            return {
                ...state,
                isFast: action.isFast,
                counter: state.counter
            }
        case ActionEnum.SET_PREMIUM:
            return {
                ...state,
                isPremium: action.isPremium,
                counter: state.counter,
                lastChange: LastChange.IsOptions,
            }
        case ActionEnum.SET_FROM_VAL:
            console.log('reducer: SET_FROM_VAL');

            return {
                ...state,
                isToCalc: true,
                fromVal: action.val,
                lastChange: LastChange.IsFromVal,
                counter: state.counter
            }
        case ActionEnum.SET_TO_VAL:
            console.log('reducer: SET_TO_VAL');
            state = {
                ...state,
                isToCalc: true,
                lastChange: LastChange.IsToVal,
                toVal: action.val,
                counter: state.counter,
            }
            return state
        case ActionEnum.SET_FROM_TYPE:
            return {
                ...state,
                isToCalc: true,
                lastChange: LastChange.IsFromType,
                fromType: action.val,
                counter: state.counter
            }
        case ActionEnum.SET_TO_TYPE:
            return {
                ...state,
                isToCalc: true,
                lastChange: LastChange.IsToType,
                ToType: action.val,
                counter: state.counter
            }
        case ActionEnum.SET_LAST_CHANGE:
            return {
                ...state,
                lastChange: action.val,
                counter: state.counter
            }
        case ActionEnum.SET_LAST_CALC:
            return {
                ...state,
                lastCalc: action.val,
                counter: state.counter
            }
        case ActionEnum.GO_CALC:
            if (!state.isToCalc)
                return state;
            console.log('reducer: GO_CALC');
            const rs = testOnCalc(state, state.lastChange, state.lastCalcType);
            console.log(rs);
            if (rs.calcType === CalcTypeEn.IsNone)
                return {
                    ...state,
                    isToCalc: false,
                    counter: state.counter
                }

            if (rs.calcType === CalcTypeEn.IsFromTo) {
                console.log('reducer: GO_CALC: IsFromTo');
                console.log(rs);

                return {
                    ...state,
                    toVal: rs.val,
                    isToCalc: false,
                    lastCalcType: rs.calcType,
                    counter: state.counter
                }
            }
            if (rs.calcType === CalcTypeEn.IsToFrom) {

                return {
                    ...state,
                    fromVal: rs.val,
                    isToCalc: false,
                    lastCalcType: rs.calcType,
                    counter: state.counter,
                }
            }

            //state.
            return state;

        default:
            return state;
    }
}