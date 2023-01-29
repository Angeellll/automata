import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const IconContainer = styled.div`
  font-size: 2em;
  display: flex;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 0.7vw;
  margin-left: 10px;
  font-weight: 400;
  margin: auto;
`;

const SubTitle = styled.h1`
  font-size: 0.5vw;
  font-weight: 400;
`;

const Rawr = styled.h1`
  font-size: 1vw;
  font-weight: 400;
  margin: auto;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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
        <tr>
          <td>
            <IconContainer>
              <Title>img1</Title>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Title>img1</Title>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Title>img1</Title>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Title>img1</Title>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Title>img1</Title>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Title>img1</Title>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Title>img1</Title>
            </IconContainer>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CurrencyTable;
