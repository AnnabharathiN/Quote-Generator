import { useState , useEffect } from "react";
import './App.css';
function App()
{
  const [quote, setQuote] = useState({
    text : 'your quote will appear here',
    author: 'unknown'
  });

  const fetchQuote = async() =>{
    try{
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (!response.ok) {
  throw new Error('Failed to fetch quote');
}
      const data = await response.json();
      setQuote({
        text:data.quote,
        author:data.author      });
    }
    catch(error){
      console.log("Error Fetching Quote",error);
    }
  };
  useEffect(() => {
  fetchQuote();
}, []);
  return (
    <div className="app">
      <h1>Quote Generator</h1>
      <div className="quote-box">
        <h2>{quote.text}</h2>
        <p>--{quote.author}</p>
      </div>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  )
}


export default App;