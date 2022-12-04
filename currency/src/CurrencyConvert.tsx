import React, { useState } from 'react';
import { calculateExchange, CurrencySymbol, CurrencyVal, getKnownCurrencies, ICurrencyOptions } from './Currency.utils';

import './CurrencyConvert.css';
import { CurrencyInput } from './CurrencyInput';





export interface ICurrencyProps{
    from: CurrencySymbol,
    to: CurrencySymbol,
    amount: number,
    options: ICurrencyOptions
}

export interface ICurrencyConvertData{
    from: CurrencyVal;
    to: CurrencyVal;
    options: ICurrencyOptions;
}

export interface ICurrencyConvertProps{
    data: ICurrencyConvertData;
    onGo:(data: ICurrencyConvertData)=>void;
    
}

export function CurrencyConvert(props: ICurrencyConvertProps){
    const [isPremium, setIsPremium] = useState(props.data.options.premium);
    const [isFast, setIsFast] = useState(props.data.options.fast);

    let handleGoClick=()=>{
        console.log('сделка');
        props.onGo(props.data);
    };

    let handleFromOnChange=(val: CurrencyVal)=>{
        props.data.from=val;
        console.log('CurrencyConvert: handleFromOnChange '+props.data.from);
    };
    let handleToOnChange=(val: CurrencyVal)=>{
        props.data.to=val;
        console.log('CurrencyConvert: handleFromOnChange '+props.data.to);
    };

    const handlePremiumOptionsChange=(e:any)=>{
        setIsPremium(!isPremium);
        console.log('premium '+isPremium+' '+e.target.checked);        
    }

    const handleFastOptionsChange=(e:any)=>{
        setIsFast(!isFast)
        console.log('fast '+isFast+' '+e.target.checked);
    }

    const handleFromToCalc=()=>{
        const val=calculateExchange(getKnownCurrencies()[props.data.from.valType], getKnownCurrencies()[props.data.to.valType], props.data.from.value, props.data.options);
        props.data.to.value=val;
        console.log('calculated from-to '+val);
    }
    const handleToFromCalc=()=>{
        const val=calculateExchange(getKnownCurrencies()[props.data.to.valType], getKnownCurrencies()[props.data.from.valType], props.data.to.value, props.data.options);
        props.data.from.value=val;
        console.log('calculated to-from '+val);
    }

    return (
        <div className='CurrencyConvert'>
            <div className='CurrencyConvert-InputContainer'>
            <CurrencyInput 
                data={props.data.from}
                onChange={handleFromOnChange}/>
            <button onClick={handleToFromCalc}> {'<'} </button>
            <div>--</div>
            <button onClick={handleFromToCalc}> {'>'} </button>
            <CurrencyInput
                data={props.data.to}
                onChange={handleToOnChange}/>
            </div>
            <div className='CurrencyConvert-OptionsContainer'>
                <div>
                    <input 
                        type="checkbox" id="premium" name="premium"
                        checked={isPremium}
                        onChange={handlePremiumOptionsChange}/>
                    <label htmlFor="premium">premium</label>    
                </div>
                <div>
                    <input
                        type="checkbox" id="fast" name="fast"
                        checked={isFast}
                        onChange={handleFastOptionsChange}/>
                    <label htmlFor="fast">быстро</label>    
                </div>
            </div>
            <div>
                <button onClick={handleGoClick} > сделка </button>
            </div>
            
        </div>
    )
}