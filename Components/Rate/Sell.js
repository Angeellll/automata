import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CURRENCIES = ["USD", "PHP",  "HKD", "AUD", "JPY", "EUR","KRW"];
const API_URL = "https://api.exchangerate.host/latest?base=USD&symbols=" + CURRENCIES.join(",");

const IconContainer = styled.div`
  font-size: 2em;
  display: flex;
`;

const Title = styled.h1`
  font-size: 0.7vw;
  margin: auto;
  font-weight: 400;
`;

const Rawr = styled.h1`
  font-size: 1vw;
  font-weight: 400;
  margin: auto;
  width: 60px;
`;

const CurrencyTable = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [colorIndex, setColorIndex] = useState(-1);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data.rates);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex(Math.floor(Math.random() * CURRENCIES.length));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <table>
      <style jsx>{`
        table {
          margin: auto;
          width: 100%;
          text-align: center;
        }
        th {
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        td {
          padding: 10px;
          height: 45px;
        }
        tr {
          text-align: center !important;
        }
        .green {
          color: green;
        }
        .red {
          color: red;
        }
      `}</style>
      <tbody>
        <thead>
          <tr>
            <th> 
              <Rawr>Sell</Rawr>
            </th>
          </tr>
        </thead>
        {CURRENCIES.map((currency, index) => (
          <tr key={currency}>
            <td>
              <IconContainer>
                <Title className={index === colorIndex ? (exchangeRates[currency] > 1 ? 'green' : 'red') : ''}>{exchangeRates[currency]}</Title>
              </IconContainer>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CurrencyTable;
