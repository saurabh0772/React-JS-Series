import React from 'react'

function InputBox({name, isEnabled, amount, setAmount, currencyList, currency, setCurrency}) {
    
  return (
    <div className='flex  gap-7 w-fit mb-3 p-5  rounded-md bg-gray-400  mx-auto'>
          <div className='flex flex-col'>
            <label htmlFor="Amount" className='text-black'>{name} </label>
            <input className='bg-white outline-none rounded-md px-2' type="number" disabled={isEnabled}  onChange={(e) => setAmount(e.target.value)} value={amount}/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="currencyType" className='text-black'>Currency Type </label>
            <select className='bg-white rounded-md outline-none' onChange={(e) => setCurrency(e.target.value)} value={currency} >
                
                {
                    currencyList.map(val => (
                         <option key={val} value={val}>{val}</option>
                    ))
                }
            </select>
          </div>


    </div>
  )
}

export default InputBox;