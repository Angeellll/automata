import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CURRENCIES = ["USD", "PHP",  "HKD", "AUD", "JPY", "EUR","KRW"];
const API_URL = "https://api.exchangerate.host/latest?base=USD&symbols=" + CURRENCIES.join(",");

const IconContainer = styled.div`
  font-size: 2em;
  display: flex;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 0.7vw;
  margin-left: 10px;
  font-weight: 400;
  margin: auto;
`;

const Rawr = styled.h1`
  font-size: 1vw;
  font-weight: 400;
  margin: auto;
  width: 60px;
`;


const CurrencyTable = () => {
  
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data.rates);
      });
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
          align-items: center;
          margin: auto;
        }
        td {
          color: white;
          padding: 10px;
          height: 45px;
        }
        tr {
          text-align: center !important;
        }
      `}</style>
      <tbody>
        <thead>
          <tr>
            <th>
              <Rawr>Buy</Rawr>
            </th>
          </tr>
        </thead>
        {CURRENCIES.map((currency) => (
          <tr key={currency}>
            <td>
              <IconContainer>
                <Title>{exchangeRates[currency]}</Title>
              </IconContainer>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CurrencyTable;
