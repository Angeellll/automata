import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 0.8vw;
  margin-left: 10px;
  font-weight: 400;
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
        }
        th {
          padding: 10px;
          text-align: center;

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
              
              <Rawr>Country Code</Rawr>
            </th>
          </tr>
        </thead>
        <tr>
          <td>
            <IconContainer>
              <Icon icon="flagpack:us" />
              <Title>US Dollar</Title>
              <TitleContainer>
                <SubTitle>USD</SubTitle>
              </TitleContainer>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Icon icon="flagpack:ph" />
              <Title>Philippine Peso</Title>
              <TitleContainer>
                <SubTitle>PHP</SubTitle>
              </TitleContainer>
            </IconContainer>
          </td>
        </tr>

        <tr>
          <td>
            <IconContainer>
              <Icon icon="flagpack:hk" />
              <Title>Hongkong Dollar</Title>
              <TitleContainer>
                <SubTitle>HKD</SubTitle>
              </TitleContainer>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Icon icon="flagpack:au" />
              <Title>Australian Dollar</Title>
              <TitleContainer>
                <SubTitle>AUD</SubTitle>
              </TitleContainer>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Icon icon="flagpack:jp" />
              <Title>Japanese Yen</Title>
              <TitleContainer>
                <SubTitle>JPY</SubTitle>
              </TitleContainer>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Icon icon="flag:eu-4x3" width="32" height="24" />
              <Title>European Dollar</Title>
              <TitleContainer>
                <SubTitle>EUR</SubTitle>
              </TitleContainer>
            </IconContainer>
          </td>
        </tr>
        <tr>
          <td>
            <IconContainer>
              <Icon icon="flagpack:kr" />
              <Title>Korean Won</Title>
              <TitleContainer>
                <SubTitle>KRW</SubTitle>
              </TitleContainer>
            </IconContainer>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CurrencyTable;
