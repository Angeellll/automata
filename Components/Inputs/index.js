import React from "react";
import styled from "styled-components";
import Select from "./Dropdown";
import Input from "./Input";
import { Icon } from "@iconify/react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin: auto;
  width: 90vw;

  @media only screen and (min-width: 400px) {
    display: flex;
    flex-direction: column;
    color: black;
    width: 50vw;
    margin-right: 50vw;
    margin-top: -15px;
  }
`;

const Inner = styled.div`
  margin: auto;
  width: 100%;

  @media only screen and (min-width: 400px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 300px;
  }
`;

const Submit = styled.button`
  background-color: #182467;
  border: none;
  height: 35px;
  width: 70vw;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 30px;

  @media only screen and (min-width: 400px) {
    background-color: #182467;
    border: none;
    height: 35px;
    width: 150px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 35px;

    &:hover {
      transition: 0.5s;
      transition-timing-function: ease-in;
      background-color: #1e3999;
    }
  }
`;

const BText = styled.h5`
  font-size: 15px;
  color: white;
  font-weight: 700px;
`;

const Title = styled.h5`
  font-weight: 600;
  margin-bottom: 3px;
`;

const XWrapper = styled.div`
  @media only screen and (min-width: 400px) {
    display: flex;
    justify-content: center;
  }
`;

const Icon1 = styled.div`
  display: none;

  @media only screen and (min-width: 400px) {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 43px;
    font-size: 30px;
  }
`;

const Inner1 = styled.div`
  @media only screen and (min-width: 400px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 210px;
    margin-top: 20px;
  }
`;

export default function index({ form, onInputChange, handleSubmit }) {
  return (
    <Wrapper>
      <Inner>
        <XWrapper>
          <Inner>
            <Title>From</Title>
            <Select 
              name="currencyFrom"
              value={form.currencyFrom}
              handleSelect={onInputChange}
            />
          </Inner>

          <Icon1>
            <Icon icon="ic:round-compare-arrows" />
          </Icon1>

          <Inner>
            <Title>To</Title>
            <Select 
              name="currencyTo"
              value={form.currencyTo}
              handleSelect={onInputChange}
            />
          </Inner>
        </XWrapper>
      </Inner>
      <form onSubmit={handleSubmit}>
        <Inner1>
          <Title>Amount</Title>

          <Input 
            name="amount" 
            value={form.amount} 
            handleChange={onInputChange} 
          />
        </Inner1>

        <Submit type="submit">
          <BText>
            Convert <Icon icon="icon-park-outline:play-cycle" />
          </BText>
        </Submit>
      </form>
    </Wrapper>
  );
}
