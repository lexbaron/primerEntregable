import { useState } from 'react'
import quotes from './quotes.json'
import Button from './button'


function QuoteBox() {   
    const getRandomQuotes = ( ) => Math.floor(Math.random() * quotes.length)

    const[quote, setquote] = useState(quotes[getRandomQuotes()])

    const colors = ["#79FCDF", "#68D975", "#CBF07F", "#DBCD74", "#FFD287", "#FDC29F", "#DB8D8A", "#F1A5F3", "#AE97DE", "#ADC5FF"]


    const changeQuote = () =>{
        setquote(quotes[getRandomQuotes()]) 
    }

    const randomColor =  colors[Math.floor(Math.random() * colors.length)]

    document.body.style = `background: ${randomColor}`
   
  
    return(
      <div className='card'  style={{color: randomColor}}>
        <div className='firstContainer'>
            <i className="fa-solid fa-quote-left"></i>
            <p>{quote.quote}</p>
        </div>
        <div className='secondContainer'>
            <p>{quote.author}</p>
            <Button click={changeQuote} backgroundColor={randomColor}/>
        </div>

    
      </div>
    )
  }

  

  export default QuoteBox