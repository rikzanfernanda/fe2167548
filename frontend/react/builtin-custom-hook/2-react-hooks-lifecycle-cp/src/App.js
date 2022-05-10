import React, {useState, useEffect} from "react";
import './App.css';

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <div style={{backgroundColor: 'yellow', padding: '20px'}}>
        <h1>Random Quote</h1>
      </div>
      <div data-testid="quote" style={{padding: '20px'}}>
        {loading ? 'Loading...' : <div>
          <h2>{quote.content}</h2>
          <p>~ {quote.author}</p>
          </div>}
          <button onClick={getQuote}>Get another quote</button>
      </div>
    </div>
  );
}
