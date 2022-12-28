import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Input from "../Components/Inputs";
import Result from "../Components/Result";
import Footer from "../Components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const XWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5vw;
  margin-right: 5vw;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
}
`;

const Title = styled.h1`
  font-weight: 800;
  text-align: center;
`;

export default function index() {
  return (
    <Wrapper>
      <Header />
      <Title>DENOMINATION OF INTERNATIONAL CURRENCY</Title>

      <Wrapper>
        <XWrapper>
          <form>
          <Input/>
          </form>
          <Result />
        </XWrapper>
      </Wrapper>

      <Footer />
    </Wrapper>
  );
}
