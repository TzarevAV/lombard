import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { getKnownCurrencies, ISdelkaData } from './Currency.utils';
import { CurrencyConvert } from './CurrencyConvert';
import { LastChange, FieldState } from './redux/store';
import {
  createGoCalcAction, createIncrementCounterAction,
  createLastChangeAction, createSetFastAction, createSetFromTypeAction,
  createSetFromValAction, createSetPremiumAction, createSetToTypeAction,
  createSetToValAction
} from './redux/actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const App: React.FC = () => {
  const state = useSelector<FieldState, FieldState>(state => state)
  const dispatch = useDispatch()

  if (state.isToCalc) {
    dispatch(createGoCalcAction());
  }


  const handleChangeFromVal = (val: number) => {
    console.log('App: handleChangeFromVal ' + val);
    dispatch(createSetFromValAction(val));
    dispatch(createLastChangeAction(LastChange.IsFromVal));
  }

  const handleChangeToVal = (val: number) => {
    console.log('App: handleChangeToVal ' + val);
    dispatch(createSetToValAction(val));
  }

  const handleChangeFromType = (val: number) => {
    console.log('App: handleChangeFromType ');
    dispatch(createSetFromTypeAction(val));
    dispatch(createLastChangeAction(LastChange.IsFromType));
  };
  const handleChangeToType = (val: number) => {
    console.log('App: handleChangeToType ');
    dispatch(createSetToTypeAction(val));
    dispatch(createLastChangeAction(LastChange.IsToType));
  };

  const handleChangePremium = (val: boolean) => {
    dispatch(createSetPremiumAction(val));
  }

  const handleChangeFast = (val: boolean) => {
    dispatch(createSetFastAction(val));
    console.log('App:  handleChangeFast ' + val);
    dispatch(createLastChangeAction(LastChange.IsOptions));
  }


  const handleSdelka = () => {
    const dat: ISdelkaData = {
      from: getKnownCurrencies()[state.fromType],
      to: getKnownCurrencies()[state.toType],
      amount: state.fromVal,
      options: { premium: state.isPremium, fast: state.isFast }
    };
    dispatch(createIncrementCounterAction());
    alert('сделка');
    console.log('сделка');
    console.log(dat);
  }

  return (
    <div className="App">

      <CurrencyConvert
        state={state}
        onChangeFromVal={handleChangeFromVal}
        onChangeToVal={handleChangeToVal}
        onChangeFromType={handleChangeFromType}
        onChangeToType={handleChangeToType}
        onChangePremium={handleChangePremium}
        onChangeFast={handleChangeFast}
        onGo={handleSdelka} />
    </div>
  );
}

export default App;

