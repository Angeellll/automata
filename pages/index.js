import React from 'react'
import styled from "styled-components";
import Header from '../Components/Header'
import Input from '../Components/Inputs'
import Result from "../Components/Result";
import History from "../Components/History";
import Footer from "../Components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  margin-bottom: -5px;
  margin-top: 55px;
`;

export default function index() {
  return (
      <Wrapper>
      <Header/>
      <Title>DENOMINATION OF INTERNATIONAL CURRENCY</Title>
      <Input/>
      <Result/>
      <History/>
      <Footer />
      </Wrapper>
  )
}
