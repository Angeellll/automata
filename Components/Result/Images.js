import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import Image from "next/image";

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

const CurrencyTable = ({ images, currency }) => {
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
          height: 50px;
          border: 1px solid red;
        }
        tr {
          text-align: center !important
          
        }
        
      `}</style>
      <tbody>

        {images && (
          Object.keys(images).map(key => (
            <tr key={key}>
              <td>
                <IconContainer>
                  <Title>
                    <Image src={`/${currency}${key}.png`} alt="bill" width={130} height={45} />
                  </Title>
                </IconContainer>
              </td>
            </tr>
          ))
        )}

      </tbody>
    </table>
  );
};

export default CurrencyTable;
