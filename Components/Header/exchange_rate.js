import { useState, useEffect } from "react";

const CURRENCIES = ["USD", "EUR", "AUD", "JPY"];

export default function ExchangeRates() {
  const [rates, setRates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchRates() {
      const res = await fetch("https://api.exchangerate.host/latest?base=PHP");
      const data = await res.json();
      const filteredRates = Object.entries(data.rates).filter(([currency]) =>
        CURRENCIES.includes(currency)
      );
      setRates(filteredRates);
    }
    fetchRates();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % rates.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, rates.length]);

  const [currency, rate] = rates[currentIndex] || [];

  return (
    <div className="exchange-rates">
      <style jsx>{`
        .exchange-rates {
          text-align: center;
          transition: opacity 0.5s;
        }
      `}</style>
      {currency && (
        <div>
          1 PHP → {rate} {currency}
        </div>
      )}
    </div>
  );
}
