import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const IconContainer = styled.div`
  font-size: 2em;
  display: flex;
`;

const Title = styled.h1`
  font-size: 0.7vw;
  margin: auto;
  font-weight: 400;
`;

const Rawr = styled.h1`
  font-size: 1vw;
  font-weight: 400;
  margin: auto;
`;


const CurrencyTable = () => {
  return (
    <table>
      <style jsx>{`
        table {
          margin: auto;
          width: 100%;
          
          text-align: center;
        }
        th {
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
          
        td {
          color: white;
          padding: 10px;
          height: 45px;
        }
        tr {
          text-align: center !important
          
        }
        
      `}</style>
      <tbody>
        <thead>
          <tr>
            <th> 
              <Rawr>Sell</Rawr>
            </th>
          </tr>
        </thead>
        <tr>
          <td>
            <IconContainer>
              <Title>#</Title>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Title>#</Title>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Title>#</Title>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Title>#</Title>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Title>#</Title>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Title>#</Title>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Title>#</Title>
            </IconContainer>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CurrencyTable;
