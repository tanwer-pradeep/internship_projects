import React from 'react'

export default function Currencyrow(props) {
    const {currencies} = props
    return (
        <div className="main">
            <select name="curr" id="curr">
                {currencies.map(value =>(

                <option key = {value} value={value}>{value}</option>
                ))}
            </select>
            <input type="number" />

        </div>
    )
}
