import React, { useState, useEffect } from "react";

const CurrencyTable = () => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    async function fetchRates() {
      const res = await fetch("https://api.exchangerate.host/latest?base=PHP");
      const data = await res.json();
      setRates(data.rates);
    }

    fetchRates();
  }, []);

  return (
    <table>
      <style jsx>{`
        table {
          margin: auto;
          margin-top: 20px;
        }
        th {
          font-size: 1rem;
          padding: 10px;
        }
        td {
          font-size: 1rem;
          padding: 10px;
        }

        @media only screen and (min-width: 400px) {
          table {
            margin: auto;
            margin-top: 50px;
          }
          th {
            font-size: 1.5rem;
            padding: 10px;
          }
          td {
            font-size: 1.5rem;
            padding: 10px;
          }
        }
      `}</style>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Exchange Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PHP</td>
          <td>{rates.PHP}</td>
        </tr>
        <tr>
          <td>USD</td>
          <td>{rates.USD}</td>
        </tr>
        <tr>
          <td>EUR</td>
          <td>{rates.EUR}</td>
        </tr>
        <tr>
          <td>AUD</td>
          <td>{rates.AUD}</td>
        </tr>
        <tr>
          <td>JPY</td>
          <td>{rates.JPY}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CurrencyTable;
