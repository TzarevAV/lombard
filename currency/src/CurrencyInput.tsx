import React, { useState } from 'react';
import { CurrencyVal, getKnownCurrencies } from './Currency.utils';

import './CurrencyInput.css';

export interface ICurrencyInputProps{
    data:CurrencyVal;
    onChange:(val: CurrencyVal)=>void;
}

export function CurrencyInput(props: ICurrencyInputProps){
    let currencyList:string[]=getKnownCurrencies();
    const [inputVal, setInputVal] = useState(props.data.value); 
    const [inputTypeID, setInputTypeID] = useState(props.data.valType);

    let handleValChange=(e: any)=>{
        props.data.value=e.target.value;
        setInputVal(props.data.value);
    //    console.log('CurrencyInput: handleValChange '+props.data.valType+' '+props.data.value);
        props.onChange(props.data);
    }
    let handleValTypeChange=(e:any)=>{
        props.data.valType=e.target.selectedIndex;
        setInputTypeID(e.target.selectedIndex)
    //    console.log('CurrencyInput: handleValTypeChange '+props.data.valType);
        props.onChange(props.data);
//        console.log(dataTmp.valType);
    }
    return ( 
        <div className='CurrencyInput'>
            <input 
                type="number"
                min={0} max={100000000}
                value={inputVal}
                step={0.01} placeholder='что менять'
                pattern='\d\d\d\d\d\d\d.\d\d' onChange={handleValChange}/>
            <select name="cur" id="cur" onChange={handleValTypeChange}>
                {currencyList.map((item, index)=>
                    <option key={index} value={index}
                        selected={inputTypeID===index}
                    >{item}</option>
                )}
            </select>
        </div>
    )
}