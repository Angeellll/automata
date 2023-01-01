import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Input from "../Components/Inputs";
import Result from "../Components/Result";
import History from "../Components/History";
import Footer from "../Components/Footer";

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
`

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

const XWrapper = styled.div`
  @media only screen and (min-width: 400px) {
    display: flex;
    flex-direction: row;
  }
`;

export default function index() {
  return (
    <>
      <Wrapper>
        <Header />
        <Title>DENOMINATION OF INTERNATIONAL CURRENCY</Title>
        <YWrapper>
          <XWrapper>
            <Input />
            <Result />
          </XWrapper>
          <History/>
        </YWrapper>

        <Footer />
      </Wrapper>
    </>
  );
}
