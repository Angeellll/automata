/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Input from "../Components/Inputs";
import Result from "../Components/Result";
import History from "../Components/History";
import Footer from "../Components/Footer";

// api request
import axios from "axios";
import RenderResult from "next/dist/server/render-result";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 375px;
  overflow-y: scroll;
  overflow-y: hidden;

  @media only screen and (min-width: 400px) {
    overflow: hidden;
  }
`;

const YWrapper = styled.div`
  @media only screen and (min-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  margin-bottom: -5px;
  margin-top: 55px;

  @media only screen and (min-width: 400px) {
    display: flex;
    font-weight: 800;
    font-size: 32px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 30px;
  }
`;

const Times = styled.h1`
  font-weight: 600;
  color: white;
  font-style: italic;
  font-size: 25px;

  @media only screen and (min-width: 400px) {
    font-size: 33px;
    text-align: center;
  }
`;

const XWrapper = styled.div`
  @media only screen and (min-width: 400px) {
    display: flex;
    flex-direction: row;
  }
`;

export default function index() {
  const [formData, setFormData] = useState({
    currencyFrom: "PHP",
    currencyTo: "PHP",
    amount: 0,
  });

  const { currencyFrom, currencyTo, amount } = formData;

  const [result, setResult] = useState();
  const [data, setData] = useState([]);

  const handleTextChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent reload on form submit

    const res = await axios.get(
      `https://currency-denomination-api.onrender.com/denomination?currency_from=${currencyFrom}&currency_to=${currencyTo}&from_value=${amount}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    setResult(res.data);
    setData([...data, res.data]);
  };

  return (
    <>
      <Wrapper>
        <Header />
        <Title>DENOMINATION OF INTERNATIONAL CURRENCY</Title>
        <div id="modal-root"></div>
        <YWrapper>
          <XWrapper>
            <Input
              form={formData}
              onInputChange={handleTextChange}
              handleSubmit={handleSubmit}
            />
            <Result
              images={
                result &&
                Object.keys(result.to_denomination).map((key) => (
                  <tr key={key}>
                    <td>
                      <Times>{key}</Times>
                    </td>
                  </tr>
                ))
              }
              denomination={
                result &&
                Object.keys(result.to_denomination).map((key) => (
                  <tr key={key}>
                    <td>
                      <Times>x{result.to_denomination[key]}</Times>
                    </td>
                  </tr>
                ))
              }
            />
          </XWrapper>

          <History
            table={data.map((datas) => (
              <tr key={datas.data}>
                <td>
                  From {datas.from} {datas.from_value} to {datas.to}{" "}
                  {datas.to_value} Exchange Rate: {datas.exchange_rate} Date:{" "}
                  {datas.date}
                </td>
              </tr>
            ))}
          />
        </YWrapper>
        <Footer />
      </Wrapper>
    </>
  );
}
