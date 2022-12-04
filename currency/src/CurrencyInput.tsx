import React, { useState } from 'react';
import { CurrencyVal, getKnownCurrencies } from './Currency.utils';

import './CurrencyInput.css';

export interface ICurrencyInputProps{
    title:string;
    onChange:()=>void;
    onUserChangeVal:()=>void;
}

export function CurrencyInput(props: ICurrencyInputProps){
    let currencyList:string[]=getKnownCurrencies();
  //  const [inputVal, setInputVal] = useState(props.data.value); 
  //  const [inputTypeID, setInputTypeID] = useState(props.data.valType);

    let handleValChange=(e: any)=>{
     //   props.data.value=e.target.value;
   //     setInputVal(props.data.value);
    //    console.log('CurrencyInput: handleValChange '+props.data.valType+' '+props.data.value);
        props.onChange();
    }
    let handleValTypeChange=(e:any)=>{
    //    props.data.valType=e.target.selectedIndex;
    //    setInputTypeID(e.target.selectedIndex)
    //    console.log('CurrencyInput: handleValTypeChange '+props.data.valType);
        props.onChange();
//        console.log(dataTmp.valType);
    }
    return ( 
        <div className='CurrencyInput'>
            <label htmlFor="val">{props.title}</label>
            <input 
                type="number"
                min={0} max={100000000}
                name='val'
                value={0}
                step={0.01} placeholder='что менять'
                pattern='\d\d\d\d\d\d\d.\d\d' onChange={handleValChange}/>
            <select name="cur" id="cur" onChange={handleValTypeChange}>
                {currencyList.map((item, index)=>
                    <option key={index} value={index}
                        selected={index===0}
                    >{item}</option>
                )}
            </select>
        </div>
    )
}