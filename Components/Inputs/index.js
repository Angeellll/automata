import React from "react";
import styled from "styled-components";
import Select from "./Dropdown";
import History from "../History";
import { Icon } from "@iconify/react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  width: 50vw;
  margin: 5px;
  position: fixed;

  @media only screen and (max-width: 600px) {
    position: relative;
  }
`;

const Inner = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
`;

const Inner1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon1 = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 43px;
  font-size: 30px;
`;

const Input = styled.input.attrs({
  type: "number",
})`
  height: 8px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid gray;
  font-size: 15px;
  color: gray;
  padding: 10px;

  &:focus {
    color: black;
  }

  &:hover {
    border: 2px solid black;
  }
}
`;

const Submit = styled.button`
  background-color: #182467;
  border: none;
  height: 35px;
  width: 150px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 25px;

  &:hover {
    transition: 0.5s;
    transition-timing-function: ease-in;
    background-color: #1e3999;
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

const I = styled.i`
  height: 1.5rem;
  width: 1.5rem;
  padding: 4px;
  position: absolute;
  box-sizing: border-box;
  top: 45%;
  right: 5px;
  transform: translateY(-50%);
  color: gray;

  &:hover {
    color: black;
  }
`;

const Rawr = styled.div`
  position: relative;
`;

export default function index() {

  const clear = () => {
    document.getElementById('Rawr').value = "";
  }

  return (
    <Wrapper>
      <Inner>
        <Inner1>
          <Title>From</Title>
          <Select />
        </Inner1>
        <Icon1>
          <Icon icon="ic:round-compare-arrows" />
        </Icon1>
        <Inner1>
          <Title>To</Title>
          <Select />
        </Inner1>
      </Inner>
      <Inner>
        <Inner1>
          <Title>Amount</Title>
          <Rawr>
            <I>
              <Icon icon="mdi:clear-outline" onClick={clear}/>
            </I>
            <Input placeholder="0.00" step=".01" id="Rawr"/>
          </Rawr>
        </Inner1>
      </Inner>
      <Submit type="submit">
        <BText>
          Convert <Icon icon="icon-park-outline:play-cycle" />
        </BText>
      </Submit>
      <History />
    </Wrapper>
  );
}
