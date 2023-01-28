import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  border-radius: 1px;
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

export default function Dropdown({ name, value, handleSelect }) {
  return (
    <>
      <Select name={name} value={value} onChange={handleSelect}>
        <option value="default" disabled>
          Select Currency
        </option>
        <option value="PHP">Philippine Peso (PHP)</option>
        <option value="USD">US Dollar (USD)</option>
        <option value="EUR">Euro (EUR)</option>
        <option value="JPY">Japanese Yen (JPY)</option>
        <option value="AUD">Australian Dollar (AUD)</option>
      </Select>
    </>
  );
}