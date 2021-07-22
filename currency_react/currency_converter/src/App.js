import React, {useEffect, useState} from 'react';
import './App.css';
import Currencyrow from './Currencyrow';

function App() {

  const [rates, setrates] = useState([])
  console.table(rates)


  useEffect(() =>{
    fetch(`https://v6.exchangerate-api.com/v6/9eb13cec034bcf7118d8275b/latest/INR`)
    .then (respo => respo.json())
    .then (data =>{
      console.log(data)
      setrates([ ...Object.keys(data.conversion_rates)])
    });
  }, []);


  return (
    <div className="container ">
    <h1>Currency Converter</h1>
    <Currencyrow
      currencies = {rates}
    />

    <button id="swap">Swap</button>
    <Currencyrow
      currencies = {rates}
    />
    </div>
  );
}

export default App;
