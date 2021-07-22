import React from 'react'

export default function Currencyrow(props) {
    const {currencies,selectedcurr, currencychange} = props
    return (
        <div className="main">
            <select value={selectedcurr} onChange={currencychange} name="curr" id="curr">
                {currencies.map(value =>(

                <option key = {value} value={value}>{value}</option>
                ))}
            </select>
            <input type="number" />

        </div>
    )
}
