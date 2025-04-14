import React, { useId } from 'react'

// props (argu passed to components) are passed as an object. // here we are destructuring them
// it is a controlled component means it's input & select is controlled by parent component
function InputBox({
    label, // string // from hai ya to hai
    amount, // number 
    onAmountChange, // function to handle amount change
    onCurrencyChange, // function to handle currency selection change
    currencyOptions = [], // list of available currency options
    selectCurrency = "usd", // currently selected currency
    amountDisable = false, // whether the amount input should be disabled
    currencyDisable = false, // whether the currency dropdown should be disabled
    className = "", // extra css classes for styling
}) {

    // useId() generates a unique ID for accessibility.
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

            <div className="w-1/2">

                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}

                    // if (onAmountChange) { onAmountChange(Number(e.target.value)); }
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} /** kabhi kabhi Js event ko string mai le leti so convert to number. */
                />

            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;


// map() : https://www.w3schools.com/Jsref/jsref_map.asp
// creates a new array from calling a function for every array element.
// does not execute the function for empty elements.
// does not change the original array.


// remember the keys in loops in js