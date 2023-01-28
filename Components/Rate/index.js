import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid black;
  border-left: none;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.h3`
  color: #fcf0f0;
  font-family: "Poppins";
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 500;
`;

const SubTitle = styled.h4`
  color: #fcf0f0;
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  margin-top: -25px;
  margin-bottom: 10px;
`;

const TitleDiv = styled.div`
  height: fit-content;
  width: 100%;
  text-align: center;
  margin-top: -5px;
  margin-bottom: -5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  text-align: center;
  color: white;
  font-size: 1.3vw;
`

const CodeDiv = styled.div`
  flex: 2;
  border: 1px solid black;
  border-left: none;
  border-bottom: none;
`

const BuyDiv = styled.div`
  flex: 1;
  border: 1px solid black;
  border-left: none;
  border-bottom: none;
`

const SellDiv = styled.div`
  flex: 1;
  border: 1px solid black;
  border-left: none;
  border-right: none;
  border-bottom: none;
`

export default function index() {
  return (
    <Container>
      <TitleDiv>
        <Title>Realtime Exchange Rate</Title>
      </TitleDiv>
      <Wrapper>
        <CodeDiv>
          Country Code
        </CodeDiv>
        <BuyDiv>
          Buy
        </BuyDiv>
        <SellDiv>
          Sell
        </SellDiv>
      </Wrapper>
    </Container>
  );
}
