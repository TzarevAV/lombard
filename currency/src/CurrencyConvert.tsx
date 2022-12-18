import React from 'react';

import './CurrencyConvert.css';
import { CurrencyInput } from './CurrencyInput';
import { FieldState } from './redux';



export interface ICurrencyConvertProps{
    state: FieldState;
    name?: string;
    counter?: number;
    onChangeFromVal:(val:number)=>void;
    onChangeToVal:(val:number)=>void;
    onChangeFromType:(type:number)=>void;
    onChangeToType:(type:number)=>void;
    onChangePremium:(val:boolean)=>void;
    onChangeFast:(val:boolean)=>void;
    onGo:()=>void;
    
}

export const CurrencyConvert:React.FC<ICurrencyConvertProps>=(props: ICurrencyConvertProps)=> {

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
        props.onChangePremium(e.target.checked);        
    }

    const handleChangeFast=(e:any)=>{
        props.onChangeFast(e.target.checked);
    }

    return (
        <div className='CurrencyConvert'>
            <div className='CurrencyConvert-InputContainer'>
                
            <CurrencyInput 
                state={props.state}
                title='продаваемая валюта'
                val={props.state.fromVal}
                type={props.state.fromType}
                onChangeVal={handleChangeFromVal}
                onChangeType={handleChangeFromType}
                />
            <div>--</div>
            <CurrencyInput
                state={props.state}
                title='покупаемая валюта'
                val={props.state.toVal}
                type={props.state.toType}
                onChangeVal={handleChangeToVal}
                onChangeType={handleChangeToType}
                />
            </div>
            <div className='CurrencyConvert-OptionsContainer'>
                <div>
                    <input 
                        type="checkbox" id="premium" name="premium"
                        checked={props.state.isPremium}
                        onChange={handleChangePremium}/>
                    <label htmlFor="premium">premium</label>    
                </div>
                <div>
                    <input
                        type="checkbox" id="fast" name="fast"
                        checked={props.state.isFast}
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

