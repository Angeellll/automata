import React from "react";
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

const CurrencyTable = ({ images, currency }) => {
  return (
    <table  cellspacing="0">
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
          height: 80px;
          border-top: 1px solid black;
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
                    <Image src={`/${currency}${key}.png`} alt="bill" width={170} height={70} />
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
