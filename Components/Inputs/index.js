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
  
`;

const Inner = styled.div`
  margin: auto;
  width: 100%;
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

export default function index() {

  return (
    <Wrapper>
      <Inner>
          <Title>From</Title>
          <Select />
          <Title>To</Title>
          <Select />
          <Title>Amount</Title>
          <Inner><Input/></Inner>
      <Submit type="submit">
        <BText>
          Convert <Icon icon="icon-park-outline:play-cycle" />
        </BText>
      </Submit>
      </Inner>
    </Wrapper>
  );
}
