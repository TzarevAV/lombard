import React from 'react';

import './CurrencyConvert.css';
import { CurrencyInput } from './CurrencyInput';

export function CurrencyConvert(){
    return (
        <div className='CurrencyConvert'>
            <CurrencyInput/>
            <button> {'<'} </button>
            <div>--</div>
            <button> {'>'} </button>
            <CurrencyInput/>
        </div>
    )
}