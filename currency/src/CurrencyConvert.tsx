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
    onGo:()=>void;
    
}

export function CurrencyConvert(props: ICurrencyConvertProps){
    const [isPremium, setIsPremium] = useState(false);
    const [isFast, setIsFast] = useState(false);

    let handleGoClick=()=>{
        console.log('сделка');
        props.onGo();
    };

    const handleFromUserChangeVal=()=>{
        console.log('CurrencyConvert: handleFromUserChangeVal ');
    }

    const handleToUserChangeVal=()=>{
        console.log('CurrencyConvert: handleToUserChangeVal ');
    }

    let handleFromOnChange=()=>{

        console.log('CurrencyConvert: handleFromOnChange ');
    };
    let handleToOnChange=()=>{

        console.log('CurrencyConvert: handleToOnChange ');
    };

    const handlePremiumOptionsChange=(e:any)=>{
        setIsPremium(!isPremium);
        console.log('premium '+isPremium+' '+e.target.checked);        
    }

    const handleFastOptionsChange=(e:any)=>{
        setIsFast(e.target.checked)
        console.log('fast '+isFast+' '+e.target.checked);
    }

    const handleFromToCalc=()=>{
//        const val=calculateExchange(getKnownCurrencies()[0], getKnownCurrencies()[0], 0, props.data.options);
 
        console.log('calculated from-to ');
    }
    const handleToFromCalc=()=>{
//        const val=calculateExchange(getKnownCurrencies()[props.data.to.valType], getKnownCurrencies()[props.data.from.valType], props.data.to.value, props.data.options);

        console.log('calculated to-from ');
    }

    return (
        <div className='CurrencyConvert'>
            <div className='CurrencyConvert-InputContainer'>
            <CurrencyInput 
                title='продаваемая валюта'
                onChange={handleFromOnChange}
                onUserChangeVal={handleFromUserChangeVal}
                />
            <div>--</div>
            <CurrencyInput
                title='покупаемая валюта'
                onChange={handleToOnChange}
                onUserChangeVal={handleToUserChangeVal}
                />
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