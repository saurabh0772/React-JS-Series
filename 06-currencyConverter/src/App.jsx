import { useEffect, useState } from 'react'
import InputBox from './components/InputBox'


function App() {
  // const [count, setCount] = useState(0)
  const [amount1, setAmount1] = useState(0);
  const [currency1, setCurrency1] = useState("usd");
  const [amount2, setAmount2] = useState(0);
  const [currency2, setCurrency2] = useState("usd");
  const [currencyList, setCurrencyList] = useState([]);
  let data = [];

   const convertCurrency = () => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency1}.json`)
        .then(res => res.json())
        .then(res => {
          setAmount2((res[currency1][currency2]) * amount1);
          setCurrencyList(Object.keys(res[currency1]));
          data = Object.keys(res[currency1]);
          // console.log(data)
          return res;
        })
    }

    const swapCurr = () => {
      const curr = currency1;
      setCurrency1(currency2);
      setCurrency2(curr);
    }

  useEffect(() => {
   
    convertCurrency();

  }, [amount1, currency1, currency2])

  return (
    <>
      <div className='bg-black w-full h-screen'>

        <div className=' w-fit mx-auto relative border border-white rounded p-3 top-40'>
          <InputBox name="From" isEnabled={false} value="" amount={amount1} setAmount={setAmount1} currencyList={currencyList} currency={currency1} setCurrency={setCurrency1} />
          <div className='absolute top-22 left-45'>
            <button className='bg-blue-600 text-white p-2 rounded-md cursor-pointer' onClick={swapCurr}>Swap</button>
          </div>
          <InputBox name="To" isEnabled={true} value={currency2} amount={amount2} setAmount={setAmount2} currencyList={currencyList} currency={currency2} setCurrency={setCurrency2} />
          <div className='mx-30'>
            <button className='bg-blue-600 px-3 py-2 text-white rounded-md cursor-pointer' onClick={convertCurrency}>Convert Currency</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
