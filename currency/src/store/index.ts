import { createStore } from "redux";
import { FieldState } from "../redux/field";
import rootReducer from '../redux'


export interface IStore{
    field: FieldState
}

const configureStore=(initialState?: IStore)=>{
    return createStore(
        rootReducer,
        initialState
    )
}

export default configureStore;