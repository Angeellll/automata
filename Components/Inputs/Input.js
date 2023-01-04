import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const InputNum = styled.input.attrs({
  type: "number",
})`
    height: 8px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid gray;
    font-size: 15px;
    color: gray;
    padding: 10px;
  
    &:focus {
      color: black;
    }

    @media only screen and (min-width: 400px) {
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

const I = styled.i`
  height: 1.5rem;
  width: 1.5rem;
  padding: 4px;
  position: absolute;
  box-sizing: border-box;
  top: 45%;
  right: 2px;
  transform: translateY(-50%);
  color: gray;

  @media only screen and (min-width: 400px) {
    height: 1.5rem;
    width: 1.5rem;
    padding: 4px;
    position: absolute;
    box-sizing: border-box;
    top: 45%;
    right: -10px;
    transform: translateY(-50%);
    color: gray;
    
  
    &:hover {
      color: black;
    }
  }
`;

const Rawr = styled.div` 
  position: relative;
  width: 100%;

  @media only screen and (min-width: 400px) {
    width: 200px;
  }
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
`;

const Inner1 = styled.div`
  
  @media only screen and (min-width: 400px) {
    display: flex;
    flex-direction: column;
    right: 0;
  }
`;

export default function Input({ name, value, handleChange }) {
  const clear = () => {
    document.getElementById("Rawr").value = "";
  };

  return (
    <Inner1>
      <Rawr>
        <I>
          <Icon icon="mdi:clear-outline" onClick={clear} />
        </I>
        <Inner>
          <InputNum 
            placeholder="0.00" 
            step=".01" 
            id="Rawr"
            name={name}
            value={value}
            onChange={handleChange}
          />
        </Inner>
      </Rawr>
    </Inner1>
  );
}
