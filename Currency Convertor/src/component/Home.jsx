import React, {useEffect, useState} from 'react'
import { MdCurrencyExchange } from "react-icons/md";
import Result from "./Result"
import countryList from '../assets/code';

const Home = () => {
    const [amount, setAmount] = useState(1)
    const [from, setFrom] = useState("USD")
    const [to, setTo] = useState("NPR")
    const [fromImg, setFromImg] = useState("US")
    const [toImg, setToImg] = useState("NP") 
    const fromImgSrc = `https://flagsapi.com/${fromImg}/flat/64.png`
    const toImgSrc = `https://flagsapi.com/${toImg}/flat/64.png`

   const selectFromFlag = (e) => {    
        setFromImg(countryList[e.target.value])
        setFrom(e.target.value)
    }
    const selectToFlag = (e) => {      
        setToImg(countryList[e.target.value])
        setTo(e.target.value)
    }
    const inputAmount = (e) =>{
        setAmount(e.target.value)
    }
    
   useEffect(()=>{
   
   }, [amount, from, to] )
  
  return (
    <div className='currencyConvertor'>
        <div className='container'>
            <h1>Currency Convertor</h1>
            <div className='input'>
                <h3>Enter Amount Here</h3>
                <input type='number'onChange={inputAmount} value={amount}/>
            </div>
           <div className="exchange" >
                <div>
                    <div>
                        <img src={fromImgSrc} />
                    </div>
                    <select defaultValue={from} onChange={selectFromFlag}>
                        {Object.keys(countryList).map((currency)=>
                            <option key={currency} value={currency}>{currency}</option>
                        )}
                                            
                    </select> 

                </div> 
                <div ><MdCurrencyExchange className='icon'/></div>              
                
                <div>
                    <div >
                        <img src={toImgSrc} />
                    </div>
                    <select defaultValue={to} onChange={selectToFlag}>
                        {Object.keys(countryList).map((currency)=>
                            
                            <option key={currency} value={currency}>{currency}</option>
                        )}
                                            
                    </select> 

                </div>
                
                </div>
            <div className='result'>
                <Result from={from.toLowerCase()} to={to.toLowerCase()} amount={amount}/>
                
            </div>
            
        </div>

    </div>
  )
}

export default Home