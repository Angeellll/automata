import React from "react";
import styled from "styled-components";
import Button from "./Buttons";
import Dropdown from "./Dropdown";
import CheckboxGrid from "./CheckboxGrid";

const Container = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1vh;
  margin-bottom: 50px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  margin-top: -8vh;
  margin-bottom: 10px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const InputDiv = styled.div`
  display: flex;
  margin-top: 1vh;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input.attrs({
  type: "number",
})`
  height: 0.3vh;
  border-radius: 1px;
  border: 1px solid gray;
  font-size: 1.5vh;
  color: gray;
  padding: 10px;
  text-align: right;

  &:hover {
    filter: drop-shadow(2px 2px 2px rgba(255, 255, 255, 0.5));
    cursor: pointer;
  }

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const SubTitle = styled.h5`
  color: white;
  font-family: "Inter";
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
  padding-right: 5px;
  padding-left: 5px;
`;

const SubTitle1 = styled.h5`
  color: black;
  font-family: "Inter";
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  padding-right: 5px;
  padding-left: 5px;
`;

const SubTitle2 = styled.h5`
  color: black;
  font-family: "Inter";
  font-weight: 500;
  padding-right: 5px;
  padding-left: 8vw;
  background-color: #C9C9C9;
  text-align: left;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-top: 0;
  margin-bottom: 0;
`;

const SubTitle3 = styled.h5`
  color: white;
  font-family: "Inter";
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  text-decoration-line: underline;
  font-style: italic;

  &:hover {
    cursor: pointer;
  }
`;

const CheckboxDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1vw;
  align-items: flex-start;
  justify-content: flex-start;
  width: 72%;
`;

const Rawr = styled.div`
  margin-top: -30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -10px;
`;
const Rawrr = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const DetailsDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  background-color: #acacac;
  padding: 10px;
`;

const LocalDiv = styled.div`
  margin-left: auto;
  margin-right: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between
  align-items: center;
`;

const History = styled.div`
  margin-left: 0;
  margin-right: auto;
  padding: 10px;
  margin-top: -10px;
`;

const index = () => {
  return (
    <Container>
      <ButtonDiv>
        <Button primary>BUY</Button>
        <Button warning>SELL</Button>
      </ButtonDiv>
      <Rawrr>
        <InputWrapper>
          <InputDiv>
            <SubTitle>Currency Code</SubTitle>
            <Dropdown />
          </InputDiv>
          <InputDiv>
            <SubTitle>Exchange Code</SubTitle>
            <Dropdown />
          </InputDiv>
          <InputDiv>
            <SubTitle>Amount</SubTitle>
            <Input placeholder="0.00" />
            <SubTitle>GBP</SubTitle>
          </InputDiv>

          <CheckboxDiv>
            <SubTitle>Available denomination</SubTitle>
            <CheckboxGrid
              labels={[
                "2000",
                "100",
                "5",
                "0.25",
                "1000",
                "50",
                "2",
                "0.1",
                "500",
                "20",
                "1",
                "0.05",
                "200",
                "10",
                "0.5",
                "0.01",
              ]}
            />

            <Rawr>
              <Button>CONVERT</Button>
            </Rawr>
          </CheckboxDiv>
        </InputWrapper>
      </Rawrr>
      <DetailsDiv>
        <SubTitle1>Exchange Rate Details</SubTitle1>
        <DetailsDiv>
          <SubTitle1>100.00/0.555556 = 180.00 USD</SubTitle1>
          <SubTitle1>Buy Rate = 1.80</SubTitle1>
          <SubTitle1>Buy Comission =10.00%</SubTitle1>
          <SubTitle1>Exchange Date = 2023 - 01 - 10 1:49PM </SubTitle1>
        </DetailsDiv>
      </DetailsDiv>
      <LocalDiv>
        <SubTitle>Local Amount</SubTitle>
        <SubTitle2>180.00</SubTitle2>
      </LocalDiv>
      <History>
        <SubTitle3>Show history details</SubTitle3>
      </History>
    </Container>
  );
};

export default index;
