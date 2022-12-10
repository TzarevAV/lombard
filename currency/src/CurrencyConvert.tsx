import React, { useState } from 'react';
import { calculateExchange, CurrencySymbol, CurrencyVal, getKnownCurrencies, ICurrencyOptions, ISdelkaData } from './Currency.utils';

import './CurrencyConvert.css';
import { CurrencyInput } from './CurrencyInput';


export interface ICurrencyConvertData{
    from: CurrencyVal;
    to: CurrencyVal;
    options: ICurrencyOptions;
}

export interface ICurrencyConvertProps{
    data:ICurrencyConvertData;
    onChangeFromVal:(val:number)=>void;
    onChangeToVal:(val:number)=>void;
    onChangeFromType:(type:number)=>void;
    onChangeToType:(type:number)=>void;
    onChangePremium:(val:boolean)=>void;
    onChangeFast:(val:boolean)=>void;
    onGo:()=>void;
    
}

export function CurrencyConvert(props: ICurrencyConvertProps){
    //const [isPremium, setIsPremium] = useState(false);
    //const [isFast, setIsFast] = useState(false);

    let handleGoClick=()=>{
        console.log('сделка');
        props.onGo();
    };

    const handleChangeFromVal=(val:number)=>{
        console.log('CurrencyConvert: handleChangeFromVal ');
        console.log(val);
        props.onChangeFromVal(val);
    }

    const handleChangeToVal=(val:number)=>{
        console.log('CurrencyConvert: handleChangeToVal ');
        console.log(val);
        props.onChangeToVal(val);
    }

    let handleChangeFromType=(val:number)=>{
        console.log('CurrencyConvert: handleChangeFromType ');
        console.log(val);
        props.onChangeFromType(val);
    };
    let handleChangeToType=(val:number)=>{
        console.log('CurrencyConvert: handleChangeToType ');
        console.log(val);
        props.onChangeToType(val);
    };

    const handleChangePremium=(e:any)=>{
//        setIsPremium(!isPremium);
//        console.log('premium '+e.target.checked);
        props.onChangePremium(e.target.checked);        
    }

    const handleChangeFast=(e:any)=>{
//        setIsFast(e.target.checked)
//        console.log('fast '+isFast+' '+e.target.checked);
        props.onChangeFast(e.target.checked);
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
                val={props.data.from.value}
                type={props.data.from.valType}
                onChangeVal={handleChangeFromVal}
                onChangeType={handleChangeFromType}
                />
            <div>--</div>
            <CurrencyInput
                title='покупаемая валюта'
                val={props.data.to.value}
                type={props.data.to.valType}
                onChangeVal={handleChangeToVal}
                onChangeType={handleChangeToType}
                />
            </div>
            <div className='CurrencyConvert-OptionsContainer'>
                <div>
                    <input 
                        type="checkbox" id="premium" name="premium"
                        checked={props.data.options.premium}
                        onChange={handleChangePremium}/>
                    <label htmlFor="premium">premium</label>    
                </div>
                <div>
                    <input
                        type="checkbox" id="fast" name="fast"
                        checked={props.data.options.fast}
                        onChange={handleChangeFast}/>
                    <label htmlFor="fast">быстро</label>    
                </div>
            </div>
            <div>
                <button onClick={handleGoClick} > сделка </button>
            </div>
            
        </div>
    )
}