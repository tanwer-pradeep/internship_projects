import React, {useEffect, useState} from 'react';
import './App.css';
import Currencyrow from './Currencyrow';

function App() {

  const [currnames, setrates] = useState([])
  console.table(currnames)

  const [currentcurr, setcurrentcurr] = useState();
  const[convcurr, setconvcurr] = useState();

  useEffect(() =>{
    fetch(`https://v6.exchangerate-api.com/v6/9eb13cec034bcf7118d8275b/latest/INR`)
    .then (respo => respo.json())
    .then (data =>{
      console.log(data)
      const c1 = Object.keys(data.conversion_rates)[1];
      setrates([ ...Object.keys(data.conversion_rates)])
      setcurrentcurr(data.base_code) 
      setconvcurr(c1);
    });
  }, []);


  return (
    <div className="container ">
    <h1>Currency Converter</h1>
    <Currencyrow
      currencies = {currnames}
      selectedcurr = {currentcurr}
      currencychange = {e => setcurrentcurr(e.target.value)}
    />

    <button id="swap">Swap</button>
    <Currencyrow
      currencies = {currnames}
      selectedcurr = {convcurr}
      currencychange = {e => setconvcurr(e.target.value)}

    />
    </div>
  );
}

export default App;
