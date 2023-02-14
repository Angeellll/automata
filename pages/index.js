
import Header from '../Components/Header'
import DateTime from '../Components/DateTime'
import Input from '../Components/Input'
import Rate from '../Components/Rate'
import Result from '../Components/Result'
import styled from 'styled-components'
import axios from "axios";
import RenderResult from "next/dist/server/render-result";
import React, { useState, useEffect } from 'react'

const XContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: auto;
  height: 80vh;
`




export default function index() {
  const [formData, setFormData] = useState({
    currencyFrom: "PHP",
    currencyTo: "PHP",
    amount: "",
    available: []
  });

  const { currencyFrom, currencyTo, amount, available } = formData;

  const [result, setResult] = useState();
  const [data, setData] = useState([]);

  const handleTextChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const link = `https://currency-denomination-api.onrender.com/denomination?currency_from=${currencyFrom}&currency_to=${currencyTo}&from_value=${amount}&available_denomination=[${available}]`
    const response = await axios.get(link,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    setResult(response.data);
    setData([...data, response.data]);
  };

  return (
    <div>
      <XContainer>
        <Header />
        <DateTime />
      </XContainer>
      <MainWrapper>
        <Input
          form={formData}
          onInputChange={handleTextChange}
          handleSubmit={handleSubmit}
          totalAmount={result && result.to_value}
          currency={result && result.to}
          from={result && result.from_value}
          fromCurrency={result && result.to_denomination}
          rate={result && result.exchange_rate}
          date={result && result.date}
        />
        <Rate />
        {/* {result && (
          <div>
            {JSON.stringify(result)}
          </div>
          
        )} */}

        < Result
          totalAmount={result && result.to_value}
          currency={result && result.to}
          denominations={result && result.to_denomination}
        />
      </MainWrapper>
    </div>
  )
}
