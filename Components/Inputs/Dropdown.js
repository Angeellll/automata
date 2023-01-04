import React, {useState} from "react";
import styled from "styled-components";

const Select = styled.select`
  height: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid gray;
  font-size: 15px;
  background: white;
  color: gray;
  padding: 4px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  &:focus {
    color: black;
  }

  @media only screen and (min-width: 400px) {
      
    height: 30px;
    width: 190px;
    border-radius: 5px;
    border: 1px solid gray;
    font-size: 15px;
    background: white;
    color: gray;
    padding: 4px;
    margin: auto;
  
    option {
      color: black;
      background: white;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
    }
  
    &:focus {
      color: black;
    }
  
    &:hover {
      border: 2px solid black;
    }
  }
`;

export default function Dropdown({ name, value, handleSelect }) {

  return (
    <>
      <Select name={name} value={value} onChange={handleSelect}>
        <option value="default" disabled>Select Currency</option>
        <option value="PHP">Philippine Peso (PHP)</option>
        <option value="USD">US Dollar (USD)</option>
        <option value="EUR">Euro (EUR)</option>
        <option value="JPY">Japanese Yen (JPY)</option>
        <option value="AUD">Australian Dollar (AUD)</option>
      </Select>
    </>
  );
}
