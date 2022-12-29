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
`;

const Rawr = styled.div`
  position: relative;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
`;

export default function Input() {
  const clear = () => {
    document.getElementById("Rawr").value = "";
  };

  return (
    <>
      <Rawr>
        <I>
          <Icon icon="mdi:clear-outline" onClick={clear} />
        </I>
        <Inner>
          <InputNum placeholder="0.00" step=".01" id="Rawr" />
        </Inner>
      </Rawr>
    </>
  );
}
