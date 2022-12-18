import React, { useState } from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit';

//import logo from './logo.svg';
import './App.css';
import { calculateExchange, CurrencySymbol, getKnownCurrencies, ICurrencyOptions, ISdelkaData } from './Currency.utils';
import { CurrencyConvert, ICurrencyConvertData } from './CurrencyConvert';



enum LastChange{
  IsNone=0,
  IsFromVal,
  IsFromType,
  IsToVal,
  IsToType,
  IsOptions,
}

enum CalcTypeEn{
  IsNone=0,
  IsFromTo,
  IsToFrom,
}

function testOnCalc(data: ICurrencyConvertData, lastChange:LastChange, lastCalc:CalcTypeEn):{calcType:CalcTypeEn, val:number} {
  if(lastChange===LastChange.IsFromVal 
     || lastChange===LastChange.IsOptions
     || (lastChange===LastChange.IsFromType && (lastCalc===CalcTypeEn.IsNone || lastCalc===CalcTypeEn.IsFromTo))
     || (lastChange===LastChange.IsToType && (lastCalc===CalcTypeEn.IsNone || lastCalc===CalcTypeEn.IsFromTo))
     ){
      const rs=calculateExchange(getKnownCurrencies()[data.from.valType], 
      getKnownCurrencies()[data.to.valType],
      data.from.value,
      data.options
    );
    return {calcType: CalcTypeEn.IsFromTo, val: rs};
  }
  if(lastChange===LastChange.IsToVal
    || (lastChange===LastChange.IsFromType && lastCalc===CalcTypeEn.IsToFrom)
    || (lastChange===LastChange.IsToType && lastCalc===CalcTypeEn.IsToFrom)
    ){
    const rs=calculateExchange(getKnownCurrencies()[data.to.valType], 
    getKnownCurrencies()[data.from.valType],
    data.to.value,
    data.options
  );
    return {calcType: CalcTypeEn.IsToFrom, val: rs};
  }
  return {calcType: CalcTypeEn.IsNone, val: -1};
}

const store=configureStore({
 reducer: 
});

function App() {
  const [isPremium, setIsPremium] = useState(false);
  const [isFast, setIsFast] = useState(false);
  const [fromVal, setFromVal] = useState(0);
  const [toVal, setToVal] = useState(0);
  const [fromType, setFromType] = useState(0);
  const [toType, setToType] = useState(0);
  const [lastChange, setLastChange] = useState(LastChange.IsNone);
  const [lastCalcType, setLastCalcType] = useState(CalcTypeEn.IsNone);
  const [isToTestCalc, setIsToTestCalc] = useState(false);

  const data: ICurrencyConvertData={
    from: {value: fromVal, valType: fromType},
    to:  {value: toVal, valType: toType},
    options: {premium: isPremium, fast: isFast},
  };

  const handleOnCalc=(calcTypeM:CalcTypeEn, val:number)=>{
    console.log('App: handleOnCalc '+val+' '+calcTypeM);
    if(calcTypeM===CalcTypeEn.IsFromTo){
      setToVal(val);
      setLastCalcType(calcTypeM);
    }
    if(calcTypeM===CalcTypeEn.IsToFrom){
      setFromVal(val);
      setLastCalcType(calcTypeM);
    }
  }

  if(isToTestCalc){
    setIsToTestCalc(false);
    const rs=testOnCalc(data, lastChange, lastCalcType);
    if(rs.calcType!==CalcTypeEn.IsNone) handleOnCalc(rs.calcType, rs.val);
  }


  const handleChangeFromVal=(val:number)=>{
    console.log('App: handleChangeFromVal '+val);
    setFromVal(val);
    setLastChange(LastChange.IsFromVal)
    setIsToTestCalc(true);
}

const handleChangeToVal=(val:number)=>{
    console.log('App: handleChangeToVal '+val);
    setToVal(val);
    setLastChange(LastChange.IsToVal)
    setIsToTestCalc(true);
}

const handleChangeFromType=(val:number)=>{
    console.log('App: handleChangeFromType ');
    setFromType(val);
    setLastChange(LastChange.IsFromType)
    setIsToTestCalc(true);
};
const handleChangeToType=(val:number)=>{
    console.log('App: handleChangeToType ');
    setToType(val);
    setLastChange(LastChange.IsToType)
    setIsToTestCalc(true);
};

const handleChangePremium=(val:boolean)=>{
  setIsPremium(val);
//  data.options.premium=val;
  console.log('App:  handleChangePremium '+val); 
  setLastChange(LastChange.IsOptions)       
  setIsToTestCalc(true);
}

const handleChangeFast=(val:boolean)=>{
  setIsFast(val);
  console.log('App:  handleChangeFast '+val);
  setLastChange(LastChange.IsOptions)
  setIsToTestCalc(true);
}


  const handleSdelka=()=>{
    const dat: ISdelkaData={
      from: getKnownCurrencies()[data.from.valType],
      to: getKnownCurrencies()[data.to.valType],
      amount: data.from.value,
      options: data.options
    };
    alert('сделка');
    console.log('сделка');
    console.log(dat);
  }

  return (
   
    <div className="App">
      
      <CurrencyConvert 
       data={data}
       onChangeFromVal={handleChangeFromVal}
       onChangeToVal={handleChangeToVal}
       onChangeFromType={handleChangeFromType}
       onChangeToType={handleChangeToType}
       onChangePremium={handleChangePremium}
       onChangeFast={handleChangeFast}
       onGo={handleSdelka}/>   
    </div>
  
  );
}

export default App;
