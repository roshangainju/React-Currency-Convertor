import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Result = ({from, to, amount}) => {
    const url =` https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`    
    const [exchangeRate, setExchangeRate] = useState()

    useEffect(()=>{
        const getExchangeRate = async() => {           
        const {data} = await axios.get(url) 
        setExchangeRate(data[to].toFixed(4))      
        }

        getExchangeRate()
    }, [from, amount, to])

    return (
        <div className='result'>

            <h4>{`Exchange Rate; 1${from.toUpperCase()} equals ${exchangeRate} ${to.toUpperCase()}`}</h4>
            <h3>{`${amount} ${from.toUpperCase()} = ${amount*exchangeRate} ${to.toUpperCase()}`}</h3>
    
        </div>
    )
}

export default Result