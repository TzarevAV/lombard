import React, { useState } from 'react';
import { CurrencyVal, getKnownCurrencies } from './Currency.utils';

import './CurrencyInput.css';

export interface ICurrencyInputProps{
    title:string;
    val: number;
    type: number;
    onChangeType:(val:number)=>void;
    onChangeVal:(val:number)=>void;
}

export function CurrencyInput(props: ICurrencyInputProps){
    let currencyList:string[]=getKnownCurrencies();
  //  const [inputVal, setInputVal] = useState(props.data.value); 
  //  const [inputTypeID, setInputTypeID] = useState(props.data.valType);

    let handleChangeVal=(e: any)=>{
     //   props.data.value=e.target.value;
   //     setInputVal(props.data.value);
        console.log('CurrencyInput: handleValChange ');
        props.onChangeVal(e.target.value);
    }
    let handleChangeType=(e:any)=>{
    //    props.data.valType=e.target.selectedIndex;
    //    setInputTypeID(e.target.selectedIndex)
        console.log('CurrencyInput: handleValTypeChange ');
        props.onChangeType(e.target.selectedIndex);
//        console.log(dataTmp.valType);
    }
    return ( 
        <div className='CurrencyInput'>
            <label htmlFor="val">{props.title}</label>
            <input 
                type="number"
                min={0} max={100000000}
                name='val'
                value={props.val}
                step={0.01} placeholder='что менять'
                pattern='\d\d\d\d\d\d\d.\d\d' onChange={handleChangeVal}/>
            <select name="cur" id="cur" onChange={handleChangeType}>
                {currencyList.map((item, index)=>
                    <option key={index} value={index}
                        selected={index===props.type}
                    >{item}</option>
                )}
            </select>
        </div>
    )
}