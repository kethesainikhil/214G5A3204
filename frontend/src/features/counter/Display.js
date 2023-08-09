import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNumbers } from './displayAPI';
import { getNumberAsync, getValues } from './displaySlice';

export function Display() {
  const vals = useSelector(getValues)
  const urlArray = [];
  const [queryParam,setqueryparam]  = useState("")
  const dispatch = useDispatch();
  const handleSubmit = () =>{
    const queryString = urlArray.join("&")
    dispatch(getNumberAsync(queryString)) 
    setqueryparam(queryString)
    urlArray.splice(0,urlArray.length)
  }

  const handlePrime = () =>{
    urlArray.push("url=http://20.244.56.144/numbers/primes")
  }
  const handleOdd = () =>{
   urlArray.push("url=http://20.244.56.144/numbers/odd")
  }
  const handleEven = () =>{
    urlArray.push("url=http://20.244.56.144/numbers/rand")
  }
  const handleFibo = () =>{
    urlArray.push("url=http://20.244.56.144/numbers/fibo")
  }
  const sortedPairs = Object.entries(vals)
  .sort((a, b) => a[1] - b[1])  // Sort based on values
  .map(pair => ` ${pair[1]}`);

const combinedResult = '[' + sortedPairs.join(', ') + ']';

const outputElement = document.getElementById('output');
if(outputElement){
  outputElement.textContent = combinedResult;
}

  


  return (
    <div className='container'>
      <div className='subclass'>
      <button onClick={handlePrime}>prime Numbers</button>
      <button onClick={handleOdd}>odd Numbers</button>
      <button onClick={handleEven}>Random Numbers</button>
      <button onClick={handleFibo}>Fibo Numbers</button>
      </div>
      <div>
        <button type='submit' className='button-submit' onClick={handleSubmit}>click Me!</button>
      </div>
      <div id='output'>
        
      </div>
    </div>
    
  );
}
