import styled from "styled-components";
import { Icon } from "@iconify/react";
import Rates from "../Rates";
import React, { useState } from "react";
import Exchange_Rate from "./exchange_rate";

const Wrapper = styled.div`
  background-color: #182467;
  height: 40px;
  color: #ffff;
  position: fixed;
  top: 0;
  width: 100%;
  padding-bottom: 8px;
  z-index: 1;

  @media only screen and (min-width: 400px) {
    display: flex;
    justify-content: stretch;
    background-color: #182467;
    height: 70px;
    color: #ffff;
  }
`;

const Flash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 400px) {
    margin: auto;
    margin-top: -5px;
  }
`;

const List = styled.div`
  color: white;
  position: fixed;
  right: 5vw;
  top: 0;

  @media only screen and (min-width: 400px) {
    position: absolute;
    right: 2vw;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 18px;

  @media only screen and (min-width: 400px) {
    font-weight: 600;
    font-size: 32px;
  }
`;

export default function Header() {
  const [showRate, setShowRate] = useState(false);

  return (
    <Wrapper>
      <Flash>
        <Title>
          <Exchange_Rate />
        </Title>
      </Flash>
      <List>
        <Title>
          {" "}
          <Icon icon="gridicons:dropdown" onClick={() => setShowRate(true)} />
          {showRate && (
            <Rates onClose={() => setShowRate(false)} show={showRate}></Rates>
          )}
        </Title>
      </List>
    </Wrapper>
  );
}
