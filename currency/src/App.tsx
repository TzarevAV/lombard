import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { CurrencyConvert, ICurrencyConvertData } from './CurrencyConvert';

function App() {
  const data: ICurrencyConvertData={
    from: {value: 0, valType: 0},
    to:  {value: 0, valType: 0},
    options: {premium: false, fast: false},
  };
  


  const handleSdelka=(data: ICurrencyConvertData)=>{
    alert('сделка');
  }

  return (
    <div className="App">
      
      <CurrencyConvert 
       data={data}
       onGo={handleSdelka}/>   
    </div>
  );
}

export default App;
