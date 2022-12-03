import React from 'react';

import './CurrencyInput.css';

export function CurrencyInput(){
    return (
        <div className='CurrencyInput'>
            <input type="number" min={0} max={100000000} step={0.01} placeholder='что менять' pattern='\d\d\d\d\d\d\d.\d\d'/>
            <select name="cur" id="cur">
                <option value="RU">RU</option>
                <option value="$">$</option>
            </select>
        </div>
    )
}