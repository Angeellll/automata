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
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  margin-top: -5vh;
`;

const InputDiv = styled.div`
  display: flex;
  margin-top: 2vh;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input.attrs({
  type: "number",
})`
  height: 1vh;
  border-radius: 1px;
  border: 1px solid gray;
  font-size: 15px;
  color: gray;
  padding: 10px;
  text-align: right;


  &:hover {
    filter: drop-shadow(2px 2px 2px rgba(255, 255, 255, 0.5));
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

const CheckboxDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const index = () => {
  return (
    <Container>
      <ButtonDiv>
        <Button primary>BUY</Button>
        <Button warning>SELL</Button>
      </ButtonDiv>
      <InputWrapper>
        <InputWrapper></InputWrapper>
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
          <Input 
           placeholder="0.00"/>
          <SubTitle>GBP</SubTitle>
        </InputDiv>
      </InputWrapper>

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
          onChange={(checked, value) =>
            console.log(
              `Checkbox ${value} is ${checked ? "checked" : "unchecked"}`
            )
          }
        />
        <Button warning>SELL</Button>
      </CheckboxDiv>
    </Container>
  );
};

export default index;
