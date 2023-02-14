import React from 'react'
import styled from 'styled-components'
import Images from './Images';
import Quantity from './Quantity'

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

const SubTitle = styled.h3`
  color: #fcf0f0;
  font-family: "Poppins";
  font-size: 1vw;
  font-style: normal;
  font-weight: 500;
`;

const SubTitle1 = styled.h3`
  color: black;
  font-family: "Poppins";
  font-size: 1vw;
  font-style: normal;
  font-weight: 500;
  padding-right: 5px;
`;

const TitleDiv = styled.div`
  height: fit-content;
  width: 100%;
  text-align: center;
  margin-top: -5px;
  margin-bottom: -5px;
`;

const Amount = styled.div`
  background-color: #C9C9C9;
  display: flex;
  flex-direction: row;
  padding-left: 10vw;
  height: 3.5vh;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1vw;
  margin-right: 1vw;
`

const AmountContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  margin-top: -1.5vh;
`
const OutputContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  text-align: center;
  margin-top: -1.5vh;
  overflow: auto;
`
const ImagesDiv = styled.div`
  flex: 2;
  font-size: 1.4vw;
`

const QuantityDiv = styled.div`
  flex: 1;
  font-size: 1.4vw;
`

const Scroll = styled.div`
flex: 1;
font-size: 1.4vw;
`

export default function index({totalAmount, currency}) {
  return (
    <Container>
      <TitleDiv>
        <Title>Denomination Result</Title>
      </TitleDiv>
      <AmountContainer>
        <SubTitle>Input</SubTitle>
        <Amount>
          <SubTitle1>{totalAmount}</SubTitle1>
        </Amount>
        <SubTitle>{currency}</SubTitle>
      </AmountContainer>
      <OutputContainer>
        <ImagesDiv>
          <SubTitle>Currency Images</SubTitle>
          <Images/>
        </ImagesDiv>
        <QuantityDiv>
        <SubTitle>Quantity</SubTitle>
        <Quantity/>
        </QuantityDiv>
      </OutputContainer>
    </Container>
  )
}