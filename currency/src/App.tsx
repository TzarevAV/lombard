import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { getKnownCurrencies, ISdelkaData } from './Currency.utils';
import { CurrencyConvert } from './CurrencyConvert';
import { createStore } from 'redux';
import { initialState, LastChange } from './redux/store';
import { Provider } from 'react-redux';
import { createGoCalcAction, createIncrementCounterAction, 
   createLastChangeAction, createSetFastAction, createSetFromTypeAction,
    createSetFromValAction, createSetPremiumAction, createSetToTypeAction,
     createSetToValAction } from './redux/actions';
import { reducer } from './redux';



const store=createStore(reducer, initialState);

const App: React.FC =()=> {

  const state=store.getState();

  const [counter, setCounter] = useState(0);


  const subscriber=()=>{
    console.log('subscriber');
    console.log(store.getState().counter);
    setCounter(store.getState().counter);
    return;
  };

  if(!counter) 
    store.subscribe(subscriber);
  
    
  if(state.isToCalc){
    store.dispatch(createGoCalcAction());
  }
  
 
  const handleChangeFromVal=(val:number)=>{
    console.log('App: handleChangeFromVal '+val);
    store.dispatch(createSetFromValAction(val));
    store.dispatch(createLastChangeAction(LastChange.IsFromVal));
}

const handleChangeToVal=(val:number)=>{
    console.log('App: handleChangeToVal '+val);
    store.dispatch(createSetToValAction(val));
    store.dispatch(createLastChangeAction(LastChange.IsToVal));

}

const handleChangeFromType=(val:number)=>{
    console.log('App: handleChangeFromType ');
    store.dispatch(createSetFromTypeAction(val));
    store.dispatch(createLastChangeAction(LastChange.IsFromType));
};
const handleChangeToType=(val:number)=>{
    console.log('App: handleChangeToType ');
    store.dispatch(createSetToTypeAction(val));
    store.dispatch(createLastChangeAction(LastChange.IsToType));
};

const handleChangePremium=(val:boolean)=>{
  store.dispatch(createSetPremiumAction(val));
  console.log('App:  handleChangePremium '+val);    
  store.dispatch(createLastChangeAction(LastChange.IsOptions));
}

const handleChangeFast=(val:boolean)=>{
  store.dispatch(createSetFastAction(val));
  console.log('App:  handleChangeFast '+val);
  store.dispatch(createLastChangeAction(LastChange.IsOptions));
}


  const handleSdelka=()=>{
    const dat: ISdelkaData={
      from: getKnownCurrencies()[state.fromType],
      to: getKnownCurrencies()[state.toType],
      amount: state.fromVal,
      options: { premium: state.isPremium,  fast: state.isFast}
    };
    store.dispatch(createIncrementCounterAction());
    alert('сделка');
    console.log('сделка');
    console.log(dat);
  }
  

  return (
    <Provider store={store}>
    <div className="App">
      <div>test</div>
      <div>
        {store.getState().name+' '}
        {store.getState().counter}
      </div>
     <CurrencyConvert 
       state={store.getState()}
       onChangeFromVal={handleChangeFromVal}
       onChangeToVal={handleChangeToVal}
       onChangeFromType={handleChangeFromType}
       onChangeToType={handleChangeToType}
       onChangePremium={handleChangePremium}
       onChangeFast={handleChangeFast}
       onGo={handleSdelka}/>  
    </div> 
    </Provider>
  );
}

export default App;

