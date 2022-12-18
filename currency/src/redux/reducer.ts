import { ActionEnum, FieldAction } from "./actions";
import { FieldState, initialState } from "./store";

export const reducer=(state: FieldState=initialState, action: FieldAction)=>{
    console.log('reducer ');
    switch (action.type) {
        case ActionEnum.INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter++
            }
        case ActionEnum.SET_NAME:
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state;
    }
}