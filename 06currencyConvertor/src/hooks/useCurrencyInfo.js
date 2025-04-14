import {useEffect, useState} from "react"

// convention hai - hooks hai toh phele 'use' likh dete
function useCurrencyInfo(currency){

    // This state will eventually hold the currency information retrieved from the API.
    const[data, setData]=useState({})

    useEffect(()=>{

        // The fetch API returns a Promise that resolves to the response object.
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json()) // here we are converting the response from string to .json
        .then((res)=>setData(res[currency])) // The setData function is called to update the state with the currency data for the provided currency.

        // .then se hume response milta hai.
        
    }, [currency])

    // currency ke andar jab bhi change ho toh hum "useEffect" ko call krna chahenge
    // so dependency of "useEffect" is "currency"

    console.log(data);
    return data; // returns the data state, so any component using this hook will have access to the fetched currency information.
}

export default useCurrencyInfo;


/*

    // useEffect takes a callback function, a dependency array
    // useEffect runs the provided callback function whenever the currency dependency changes.

.then() is a method used with Promises in JavaScript to handle asynchronous operations. 
It is used to specify what should happen when a Promise is successfully resolved (i.e., when the asynchronous operation completes without errors). 
It can also be used to handle the result of that operation.

A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
A Promise can be in one of three states:
- Pending: The operation is still in progress.
- Resolved: The operation completed successfully, and the Promise now contains the result.
- Rejected: The operation failed, and the Promise contains an error.

The .then() method is used to specify what happens when a Promise is resolved (i.e., when the operation succeeds).

promise.then(onFulfilled, onRejected);

- onFulfilled: A function that runs when the Promise is resolved successfully. It takes the resolved value as its argument.
- onRejected: A function that runs if the Promise is rejected (optional, you can handle errors separately using .catch()).


*/




